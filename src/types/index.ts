export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: string;
}
