import projectImg1 from '../assets/logistics.png';
import greenremedies from '../assets/greenremedies.png';
import fashmall from '../assets/fashmall.png';
import projectImg2 from '../assets/audiophile.png';
import projectImg3 from '../assets/crappo.png';
import projectImg4 from '../assets/foodex.png';
import compressedImg1 from '../assets/compressed/audiophile.jpg';
import compressedImg2 from '../assets/compressed/crappo.jpg';
import compressedImg3 from '../assets/compressed/foodex.jpg';
import compressedImg4 from '../assets/compressed/logisticsBlur.jpg';

export const navMenu = [
  { id: 1, title: 'Home', link: '#' },
  { id: 2, title: 'About', link: '#about' },
  { id: 2, title: 'Experience', link: '#experience' },
  { id: 3, title: 'Projects', link: '#projects' },
  { id: 4, title: 'Skills', link: '#skills' },
  { id: 5, title: 'Contact', link: '#contact' },
] as const;

export const experience = [
  {
    id: 1,
    company: 'BellBank',
    title: '',
    icon: '',
  },
  {
    id: 2,
    company: '',
    title: '',
    icon: '',
  },
];

export const projectsData = [
  {
    projectName: 'FashMall',
    description:
      'An ecommerce fashion marketplace where users can buy or sell fashion items like clothing, assecories, shoes, etc. Users can sign up and will be able to switch to either as a buyer or as a seller.',
    stackUsed: ['NextJS', 'TailwindCSS', 'Clerk', 'Convex'],
    imageUrl: fashmall,
    url: 'https://fashmall.netlify.app',
    compressedImg: '',
    status: 'In-Progress',
  },
  {
    projectName: 'Green Remedies',
    description:
      'An open source internship project hosted by Enoverlab.com. Worked with a team of product managers, designers, and developers to build an ecommerce web app for herbal products',
    stackUsed: ['React', 'TailwindCSS', 'Figma', 'AOS library', 'Kinde Auth'],
    imageUrl: greenremedies,
    url: 'https://thegreenremedies.com',
    compressedImg: '',
    status: 'Completed',
  },
  {
    projectName: 'Transit flow Logististcs',
    description:
      'A fully responsive landing page for a logistics company (TransitFlow)',
    stackUsed: ['React', 'TailwindCSS', 'Figma'],
    imageUrl: projectImg1,
    url: 'https://transit-flow-logistics.netlify.app',
    compressedImg: compressedImg1,
    status: 'Completed',
  },
  {
    projectName: 'Audiophile E-commerce',
    description:
      'A fully responsive and functional e-commerce website for a company that sells hadphones, earphones, and speakers',
    stackUsed: ['React', 'TailwindCSS', 'Framer Motion', 'Figma'],
    imageUrl: projectImg2,
    url: 'https://audiophile-estore.netlify.app',
    compressedImg: compressedImg2,
    status: 'Completed',
  },
  {
    projectName: 'Crappo Cryptocurrency',
    description:
      'A fully responsive landing page for a crypto currency website.',
    stackUsed: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: projectImg3,
    url: 'https://crappo-crypto-page.netlify.app',
    compressedImg: compressedImg3,
    status: 'Completed',
  },
  {
    projectName: 'FoodEx Restaurant',
    description:
      'A fully responsive static landing page for a restaurant (foodex). Users can view the restaurant menu, chefs, and also blog post uploaded by the restaurant',
    stackUsed: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: projectImg4,
    url: 'https://foodex-restaurant.netlify.app',
    compressedImg: compressedImg4,
    status: 'Completed',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind',
  'Framer Motion',
  'NextJS',
  'Convex',
  'React',
  'TypeScript',
  'Figma',
  'Bootstrap',
  'Git/Github',
] as const;
