import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Resume knowledge base for Gemini system prompt
const ABHISHEK_RESUME_CONTEXT = `
Name: Abhishek Kumar Tiwari
Role: Computer Science Engineering Student | Full Stack & Machine Learning Developer
Email: ktiwariabhishek2233@gmail.com
Phone: +91 8726595846
LinkedIn: https://linkedin.com/in/abhishek028
GitHub: https://github.com/ktiwariabhishek2233-stack

Career Objective:
Computer Science Engineering student skilled in Java, DSA, and Full Stack Development, passionate about building innovative, well-engineered software solutions.

Education:
- Chitkara University, Himachal Pradesh (2024 – 2028)
- Bachelor of Engineering (Computer Science Engineering)
- CGPA: 8.71 / 10

Technical Skills:
- Programming Languages: Java, Python, C, C++, JavaScript
- Web Technologies: HTML, CSS, JavaScript, React.js, Node.js (Basics)
- Database: MySQL, MongoDB
- Core CS Subjects: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), DBMS, Operating Systems (OS), Computer Networks (CN)
- Tools & Libraries: Git, GitHub, VS Code, Arduino IDE, Google Colab, OpenCV, Scikit-learn, Pandas, NumPy, Matplotlib

Projects:
1. Gesture-Based Home Automation System with Mode Switching & Auto Timer (2026)
   - Tech: Python, OpenCV, Arduino
   - Features: Touchless smart home automation system using Python, OpenCV, and Arduino. Implemented gesture recognition, mode switching, and an auto OFF timer for efficient appliance control.
2. Retail Billing System (2026)
   - Tech: HTML, CSS, JavaScript
   - Features: Built a billing and invoice generation system using HTML, CSS, and JavaScript. Implemented shopping cart, GST calculation, invoice generation, and LocalStorage persistence.
3. CompareX — Product Comparison Platform (2026)
   - Tech: MERN Stack (MongoDB, Express.js, React.js, Node.js)
   - Features: Full-stack web application enabling users to compare products side by side. Features to save and revisit past comparisons, responsive React frontend, Node.js/Express backend, and optimized MongoDB schema.

Research Paper:
"A Machine Learning Approach for Kidney Tumor Classification"
- Compared KNN, SVM, Decision Tree, and Random Forest models.
- Performed feature extraction, preprocessing, model training, and evaluation using Python and Scikit-learn.

Achievements & Leadership:
- Authored a research paper on Kidney Tumor Classification.
- Developed multiple academic and web development projects.
- Served as House Prefect in school, leading fellow students and assisting in discipline and event management.

Areas of Interest:
Full Stack Development, Software Development, Machine Learning, Computer Vision, Internet of Things (IoT), Data Structures & Algorithms.

Soft Skills:
Problem Solving, Teamwork, Communication, Leadership, Quick Learner, Time Management.

Languages:
English, Hindi.
`;

// API endpoint for AI Resume Chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "Gemini API key is not configured. Please set GEMINI_API_KEY in environment variables."
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const systemInstruction = `
You are "Abhishek's AI Portfolio Assistant", an intelligent and professional representative for Abhishek Kumar Tiwari.
Your purpose is to answer questions from recruiters, hiring managers, and visitors about Abhishek's background, education, projects, skills, research, and contact information.

Guidelines:
1. Use the provided Resume Context strictly as your ground truth.
2. Be polite, enthusiastic, concise, and professional.
3. Highlight Abhishek's strong CGPA (8.71), expertise in Java, Full Stack, Machine Learning, and research achievements when relevant.
4. If asked about contact info, provide email (ktiwariabhishek2233@gmail.com), phone, LinkedIn, and GitHub links.
5. Format your output clearly using markdown bullet points or bold text where appropriate.

RESUME CONTEXT:
${ABHISHEK_RESUME_CONTEXT}
`;

    // Construct content history if available
    const chatContents: any[] = [];
    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.role && item.text) {
          chatContents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }]
          });
        }
      }
    }
    chatContents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: chatContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const responseText = response.text || "I'm sorry, I couldn't process your query at this moment.";
    res.json({ reply: responseText });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ error: error.message || "Failed to generate AI response." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
