// import projectImg1 from '../assets/logistics.png';
import greenremedies from '../assets/greenremedies.png';
import fashmall from '../assets/fashmall.png';
import notespace from '../assets/notespace.png';
// import projectImg2 from '../assets/audiophile.png';
import gradific from '../assets/gradific.png';
// import projectImg3 from '../assets/crappo.png';
// import projectImg4 from '../assets/foodex.png';
// import compressedImg1 from '../assets/compressed/audiophile.jpg';
// import compressedImg2 from '../assets/compressed/crappo.jpg';
// import compressedImg3 from '../assets/compressed/foodex.jpg';
// import compressedImg4 from '../assets/compressed/logisticsBlur.jpg';
import { BriefcaseBusiness, Laptop, Monitor } from 'lucide-react';

export const navMenu = [
  { id: 1, title: 'Home', link: '#' },
  { id: 2, title: 'About', link: '#about' },
  { id: 2, title: 'Experience', link: '#experience' },
  { id: 3, title: 'Projects', link: '#projects' },
  { id: 4, title: 'Skills', link: '#skills' },
  { id: 5, title: 'Contact', link: '#contact' },
] as const;

export const experiences = [
  {
    title: 'Frontend Developer',
    company: 'BellBank MFB',
    period: 'Nov 2024 – Present',
    description: (
      <span>
        - Rebuilt dashboards leading to a 10% improvement in user engagement.{' '}
        <br /> - Optimize web apps performance, achieving an increase in load
        speed, enhancing overall user experience and SEO. <br /> - Collaborate
        closely with backend developers to integrate APIs securely and
        efficiently. <br /> - Actively contribute in team meetings, offering
        insights and helping transform ideas into fully deployed features,
        directly impacting user satisfaction
      </span>
    ),
    icon: <BriefcaseBusiness size={16} className='text-white' />,
  },
  {
    title: 'Frontend Developer Intern',
    company: 'HNG Tech',
    period: 'Feb 2025 – April 2025',
    description: (
      <span>
        - Built an MVP ({' '}
        <a href='https://gradific.com' className='text-blue-500 underline'>
          Gradific
        </a>{' '}
        ), an AI grading app that allows educators spend less time grading and
        more focus on teaching.
        <br />
        - Worked in a competitive and fast paced environment with daily
        deliverables. <br />
      </span>
    ),
    icon: <Monitor size={16} className='text-white' />,
  },
  {
    title: 'Frontend Developer Intern',
    company: 'FlexiSAF Edusoft Limited',
    period: 'Jan 2025 – May 2025',
    description: (
      <span>
        Built ({' '}
        <a
          href='https://final-project-notespace.vercel.app/'
          className='text-blue-500 underline'
        >
          NoteSpace
        </a>{' '}
        ), a note taking app as part of the final project of the internship.
        Worked in an agile environment with weekly standups and deadlines.
      </span>
    ),
    icon: <Laptop size={16} className='text-white' />,
  },
  // {
  //   title: 'Frontend Developer',
  //   company: 'Enoverlab',
  //   period: 'March 2024 – June 2024',
  //   description: (
  //     <span>
  //       Built reusable components, collaborated on design systems, and
  //       contributed to live project ({' '}
  //       <a
  //         href='https://thegreenremedies.com'
  //         className='text-blue-500 underline'
  //       >
  //         Green Remedies
  //       </a>{' '}
  //       ) using React and Tailwind.
  //     </span>
  //   ),

  //   icon: <Code size={16} className='text-white' />,
  // },
];

export const projectsData = [
  {
    projectName: 'Gradific',
    description:
      'An AI grading app that helps educators save time and reduce the stress of grading, allowing them focus more on what truly matters: the students.',
    stackUsed: [
      'NextJS',
      'Typescript',
      'TailwindCSS',
      'Nexth Auth',
      'API Integration',
    ],
    imageUrl: gradific,
    url: 'https://gradific.com',
    compressedImg: '',
    status: 'In-Progress',
  },
  {
    projectName: 'Green Remedies',
    description:
      'A web app that helps users find the best natural remedies for their health issues. With this app, users can search for remedies, read reviews, and even purchase products from the comfort of their homes.',
    stackUsed: ['React', 'TailwindCSS', 'Figma', 'AOS library', 'Kinde Auth'],
    imageUrl: greenremedies,
    url: 'https://thegreenremedies.com',
    compressedImg: '',
    status: 'Completed',
  },
  {
    projectName: 'FashMall',
    description:
      'Fashmall is a fashion marketplace built to empower small-scale sellers and buyers in the fashion industry. It solves the problem of disjointed, informal sales channels by offering a structured, user-friendly platform with dedicated dashboards for buyers and sellers.',
    stackUsed: ['NextJS', 'TailwindCSS', 'Clerk', 'Convex'],
    imageUrl: fashmall,
    url: 'https://fashmall.netlify.app',
    compressedImg: '',
    status: 'In-Progress',
  },
  {
    projectName: 'NoteSpace',
    description:
      'Notes Application that helps you organize your thoughts, ideas, inspiration, anything that comes to mind. Your personal notebook',
    stackUsed: [
      'ReactJS',
      'Typescript',
      'TailwindCSS',
      'Convex Auth',
      'Convex',
    ],
    imageUrl: notespace,
    url: 'https://final-project-notespace.vercel.app/',
    compressedImg: '',
    status: 'Completed',
  },
  // {
  //   projectName: 'Transit flow Logististcs',
  //   description:
  //     'A fully responsive landing page for a logistics company (TransitFlow)',
  //   stackUsed: ['React', 'TailwindCSS', 'Figma'],
  //   imageUrl: projectImg1,
  //   url: 'https://transit-flow-logistics.netlify.app',
  //   compressedImg: compressedImg1,
  //   status: 'Completed',
  // },
  // {
  //   projectName: 'Audiophile E-commerce',
  //   description:
  //     'A fully responsive and functional e-commerce website for a company that sells hadphones, earphones, and speakers',
  //   stackUsed: ['React', 'TailwindCSS', 'Framer Motion', 'Figma'],
  //   imageUrl: projectImg2,
  //   url: 'https://audiophile-estore.netlify.app',
  //   compressedImg: compressedImg2,
  //   status: 'Completed',
  // },
  // {
  //   projectName: 'Crappo Cryptocurrency',
  //   description:
  //     'A fully responsive landing page for a crypto currency website.',
  //   stackUsed: ['HTML', 'CSS', 'JavaScript'],
  //   imageUrl: projectImg3,
  //   url: 'https://crappo-crypto-page.netlify.app',
  //   compressedImg: compressedImg3,
  //   status: 'Completed',
  // },
  // {
  //   projectName: 'FoodEx Restaurant',
  //   description:
  //     'A fully responsive static landing page for a restaurant (foodex). Users can view the restaurant menu, chefs, and also blog post uploaded by the restaurant',
  //   stackUsed: ['HTML', 'CSS', 'JavaScript'],
  //   imageUrl: projectImg4,
  //   url: 'https://foodex-restaurant.netlify.app',
  //   compressedImg: compressedImg4,
  //   status: 'Completed',
  // },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TailwindCSS',
  'NextJS',
  'BaaS',
  'ReactJS',
  'TypeScript',
  'Figma',
  // 'NodeJS',
  // 'ExpressJS',
  // 'MongoDB',
  'Collaboration',
  'API Integration',
] as const;
