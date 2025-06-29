export interface SocialMedia {
  platform: string;
  handle: string;
  url: string;
  icon: string;
  iconUrl: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  url?: string;
  github?: string;
  tags: string[];
  color: string;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}