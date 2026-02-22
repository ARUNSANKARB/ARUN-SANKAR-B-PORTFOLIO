export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Order Management System',
    description: 'A comprehensive order management platform built with Spring Boot and MySQL using layered architecture.',
    longDescription: 'A robust RESTful API-based order management system designed for enterprise environments. Features role-based access control, JWT authentication, and transactional consistency. Built with layered architecture pattern for scalability and maintainability.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'REST APIs', 'JWT', 'RBAC'],
    github: 'https://github.com/ARUNSANKARB/order-management',
    highlights: [
      'Developed RESTful APIs using layered architecture',
      'Implemented JWT authentication and RBAC',
      'Designed relational schema with transactional consistency',
      'Docker containerization for deployment'
    ]
  },
  {
    id: 2,
    title: 'Secure Banking Transaction System',
    description: 'A secure banking platform with transaction management, encryption, and concurrency handling.',
    longDescription: 'An enterprise-grade banking transaction system with advanced security measures. Built backend services for account management and fund transfers with Spring @Transactional for data integrity and concurrent transaction handling.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'BCrypt', 'Spring Security'],
    github: 'https://github.com/ARUNSANKARB/banking-system',
    highlights: [
      'Built backend services for account management and fund transfers',
      'Applied Spring @Transactional for transaction management',
      'Implemented BCrypt encryption for password security',
      'Handled concurrency for data integrity in transactions'
    ]
  },
];
