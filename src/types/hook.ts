export interface Hook {
  id: string;
  name: string;
  category: string;
  description: string;
  repoUrl: string;
  author?: string;
  tags?: string[];
}

export type Category = 'All' | 'Formatting' | 'Security' | 'Logging' | 'Notifications' | 'Validation' | 'Workflow';
