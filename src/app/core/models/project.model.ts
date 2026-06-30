export interface Project {
  id: string;
  tag: string;
  title: string;
  desc: string;
  chips: string[];
  featured?: boolean;
  longDesc?: string;
  repoUrl?: string;
  demoUrl?: string;
  features?: string[];
  inProgress?: boolean;
}
