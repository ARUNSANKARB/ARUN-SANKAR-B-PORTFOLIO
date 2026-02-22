export interface Education {
  id: number;
  degree: string;
  institution: string;
  yearOfPassing: string;
  gpa?: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Tech - Computer Science and Business Systems (CSBS)',
    institution: 'Panimalar Engineering College',
    yearOfPassing: '2027',
    gpa: '8.5/10',
    achievements: [
      'Pre-final year student with strong foundation in Java and Spring Boot',
      'Focus on enterprise application development',
      'Active in internships and certification programs'
    ]
  },
  {
    id: 2,
    degree: 'Higher Secondary Education (HSE)',
    institution: 'Mount Saint Joseph Matriculation Higher Secondary School',
    yearOfPassing: '2023',
    gpa: '84.5% (507/600)',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Database Management Systems',
    issuer: 'NPTEL (IIT Bombay)',
    date: '2025',
  },
  {
    id: 2,
    name: 'Computer Networks and Internet Protocol',
    issuer: 'NPTEL',
    date: '2025',
  },
  {
    id: 3,
    name: 'Programming in Java',
    issuer: 'NPTEL',
    date: '2024-2025',
  },
  {
    id: 4,
    name: 'Internship Certification',
    issuer: 'InternPE',
    date: '2025',
  },
  {
    id: 5,
    name: 'Internship Certification',
    issuer: 'StaxTech',
    date: '2025',
  },
  {
    id: 6,
    name: '1M1B Green Internship',
    issuer: 'AICTE Supported',
    date: '2025',
  },
  {
    id: 7,
    name: 'IoT Development Certification',
    issuer: 'Innovate Intern (AICTE)',
    date: '2025',
  },
];
