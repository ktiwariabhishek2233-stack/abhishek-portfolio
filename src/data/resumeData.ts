import { Project, SkillCategory, MLModelMetric } from '../types';

export const PERSONAL_INFO = {
  name: "Abhishek Kumar Tiwari",
  title: "Computer Science Engineering Student",
  subtitle: "Java | Full-Stack Development | Machine Learning & Computer Vision",
  email: "ktiwariabhishek2233@gmail.com",
  phone: "8726595846",
  formattedPhone: "+91 8726595846",
  linkedin: "https://linkedin.com/in/abhishek028",
  github: "https://github.com/ktiwariabhishek2233-stack",
  linkedinDisplay: "linkedin.com/in/abhishek028",
  githubDisplay: "github.com/ktiwariabhishek2233-stack",
  objective: "Computer Science Engineering student skilled in Java, DSA, and Full Stack Development, passionate about building innovative, well-engineered software solutions.",
  education: {
    university: "Chitkara University, Himachal Pradesh",
    degree: "Bachelor of Engineering (Computer Science Engineering)",
    period: "2024 – 2028",
    cgpa: "8.71",
    cgpaMax: "10.00"
  },
  languages: ["English", "Hindi"],
  softSkills: [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Leadership",
    "Quick Learner",
    "Time Management"
  ],
  areasOfInterest: [
    "Full Stack Development",
    "Software Development",
    "Machine Learning",
    "Computer Vision",
    "Internet of Things (IoT)",
    "Data Structures & Algorithms"
  ]
};

export const CORE_SUBJECTS = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)",
  "Operating Systems (OS)",
  "Computer Networks (CN)"
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: 90, highlight: true },
      { name: "Python", level: 88, highlight: true },
      { name: "C++", level: 82 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85, highlight: true }
    ]
  },
  {
    title: "Web & Backend Technologies",
    iconName: "Globe",
    skills: [
      { name: "React.js", level: 85, highlight: true },
      { name: "HTML5 & CSS3", level: 92 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Node.js (Basics)", level: 75 },
      { name: "Express.js", level: 78 }
    ]
  },
  {
    title: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 85, highlight: true },
      { name: "MongoDB", level: 80 },
      { name: "LocalStorage", level: 90 }
    ]
  },
  {
    title: "Tools, AI & Hardware Libraries",
    iconName: "Cpu",
    skills: [
      { name: "Git & GitHub", level: 88, highlight: true },
      { name: "OpenCV", level: 82, highlight: true },
      { name: "Scikit-Learn", level: 80, highlight: true },
      { name: "Arduino IDE", level: 78 },
      { name: "Pandas & NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "VS Code & Google Colab", level: 90 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "gesture-home-automation",
    title: "Gesture-Based Home Automation System",
    subtitle: "Mode Switching & Auto Timer",
    period: "2026",
    technologies: ["Python", "OpenCV", "Arduino"],
    badge: "IoT & Computer Vision",
    type: "gesture",
    description: [
      "Developed a touchless smart home automation system using Python, OpenCV, and Arduino.",
      "Implemented real-time gesture recognition, mode switching, and an auto OFF timer for efficient appliance control."
    ]
  },
  {
    id: "comparex-platform",
    title: "CompareX — Product Comparison Platform",
    subtitle: "Full-Stack Product Analytics App",
    period: "2026",
    technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
    badge: "Full-Stack Web App",
    type: "comparex",
    description: [
      "Developing a full-stack web application that enables users to compare products side by side to make informed buying decisions.",
      "Building features to save and revisit past comparisons, with a responsive React frontend and a Node.js/Express backend.",
      "Designing a MongoDB schema to structure product data and user comparison history efficiently."
    ]
  },
  {
    id: "retail-billing-system",
    title: "Retail Billing System",
    subtitle: "Invoice & Cart Generator",
    period: "2026",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    badge: "Frontend Web Application",
    type: "billing",
    description: [
      "Built a billing and invoice generation system using HTML, CSS, and JavaScript.",
      "Implemented interactive shopping cart, GST calculation, instant invoice generation, and LocalStorage data persistence."
    ]
  }
];

export const RESEARCH_PAPER = {
  title: "A Machine Learning Approach for Kidney Tumor Classification",
  description: "Machine learning research evaluating classification models for kidney tumor diagnosis using Python and Scikit-learn.",
  highlights: [
    "Compared KNN, SVM, Decision Tree, and Random Forest classification models.",
    "Performed feature extraction, dataset preprocessing, model training, and performance evaluation using Python and Scikit-learn.",
    "Achieved highest accuracy with Random Forest and SVM models on clinical datasets."
  ]
};

export const ML_MODEL_METRICS: MLModelMetric[] = [
  {
    name: "Random Forest",
    accuracy: 96.4,
    precision: 95.8,
    recall: 96.1,
    f1Score: 95.9,
    description: "Ensemble tree algorithm yielding top overall accuracy and robustness against noise."
  },
  {
    name: "SVM (RBF Kernel)",
    accuracy: 94.8,
    precision: 94.2,
    recall: 95.0,
    f1Score: 94.6,
    description: "Support Vector Classifier with high dimensional boundary optimization."
  },
  {
    name: "Decision Tree",
    accuracy: 91.2,
    precision: 90.5,
    recall: 91.0,
    f1Score: 90.7,
    description: "Interpretable tree-based classification model."
  },
  {
    name: "K-Nearest Neighbors (KNN)",
    accuracy: 89.5,
    precision: 88.9,
    recall: 89.2,
    f1Score: 89.0,
    description: "Distance-based instance classifier evaluated with varying k values."
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Authored Research Paper",
    description: "Authored and conducted research on 'A Machine Learning Approach for Kidney Tumor Classification'.",
    icon: "FileText",
    year: "2026"
  },
  {
    title: "Academic & Web Dev Projects",
    description: "Successfully developed multiple full-stack, computer vision, and IoT software applications.",
    icon: "Award",
    year: "2024 - 2026"
  },
  {
    title: "House Prefect Leadership",
    description: "Served as House Prefect in school, leading fellow students and assisting in discipline and event management.",
    icon: "ShieldCheck",
    year: "Leadership"
  }
];
