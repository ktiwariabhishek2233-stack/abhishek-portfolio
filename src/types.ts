export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  technologies: string[];
  description: string[];
  badge: string;
  type: 'gesture' | 'comparex' | 'billing';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface MLModelMetric {
  name: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
