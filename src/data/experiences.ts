export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Trainee - Workplace Experience',
    company: '1M1B Green Internship (AICTE)',
    duration: '2025',
    description: 'Selected for structured workplace experience program supported by AICTE.',
    achievements: [
      'Participated in professional workplace training',
      'Gained industry exposure and best practices',
      'Enhanced understanding of enterprise development'
    ],
    skills: ['Spring Boot', 'Java', 'Enterprise Development']
  },
  {
    id: 2,
    role: 'Java Programming Intern',
    company: 'InternPE',
    duration: 'Sep 2025 - Oct 2025',
    description: 'Java backend development and core programming concepts.',
    achievements: [
      'Developed Java applications with strong OOP principles',
      'Worked on REST API development',
      'Gained hands-on experience with Spring Boot framework'
    ],
    skills: ['Java', 'Spring Boot', 'REST APIs']
  },
  {
    id: 3,
    role: 'Java Developer Intern',
    company: 'StaxTech',
    duration: 'Nov 2025',
    description: 'Backend development using Spring Boot and MySQL.',
    achievements: [
      'Developed backend services for enterprise applications',
      'Implemented RESTful APIs with Spring Boot',
      'Worked with MySQL database for data persistence'
    ],
    skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs']
  },
  {
    id: 4,
    role: 'IoT Developer Intern',
    company: 'Innovate Intern (AICTE)',
    duration: '2025',
    description: 'IoT application development and embedded systems.',
    achievements: [
      'Explored IoT technologies and applications',
      'Worked on embedded system projects',
      'Understood IoT architecture and protocols'
    ],
    skills: ['IoT', 'Embedded Systems', 'Problem Solving']
  },
];
