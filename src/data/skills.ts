export interface Skill {
  name: string;
  icon?: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Concepts';
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'HTML5', category: 'Programming' },
  { name: 'CSS3', category: 'Programming' },

  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'ES6+', category: 'Frontend' },
  { name: 'Responsive Design', category: 'Frontend' },

  // Backend
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'JWT Authentication', category: 'Backend' },
  { name: 'RBAC', category: 'Backend' },
  { name: 'Spring JPA', category: 'Backend' },
  { name: 'Transaction Management', category: 'Backend' },
  { name: 'Exception Handling', category: 'Backend' },
  { name: 'BCrypt Encryption', category: 'Backend' },

  // Database
  { name: 'MySQL', category: 'Database' },
  { name: 'Relational Schema Design', category: 'Database' },

  // Tools & Technologies
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },

  // Concepts
  { name: 'OOPS', category: 'Concepts' },
  { name: 'Data Structures', category: 'Concepts' },
  { name: 'Algorithms', category: 'Concepts' },
];

export const skillCategories = [
  'Programming',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
  'Concepts',
];
