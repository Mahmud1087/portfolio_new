import projectImg1 from '../assets/logistics.png';
import greenremedies from '../assets/greenremedies.png';
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
  { id: 3, title: 'Projects', link: '#projects' },
  { id: 4, title: 'Skills', link: '#skills' },
  { id: 5, title: 'Contact', link: '#contact' },
] as const;

export const projectsData = [
  {
    projectName: 'Green Remedies',
    description:
      'An open source internship project hosted by Enoverlab.com. Worked with a team of product managers, designers, and developers to build an ecommerce web app for herbal products',
    stackUsed: ['React', 'TailwindCSS', 'Figma', 'AOS library', 'Kinde Auth'],
    imageUrl: greenremedies,
    url: 'https://thegreenremedies.com',
    compressedImg: '',
  },
  {
    projectName: 'Transit flow Logististcs',
    description:
      'A fully responsive landing page for a logistics company (TransitFlow)',
    stackUsed: ['React', 'TailwindCSS', 'Figma'],
    imageUrl: projectImg1,
    url: 'https://transit-flow-logistics.netlify.app',
    compressedImg: compressedImg1,
  },
  {
    projectName: 'Audiophile E-commerce',
    description:
      'A fully responsive and functional e-commerce website for a company that sells hadphones, earphones, and speakers',
    stackUsed: ['React', 'TailwindCSS', 'Framer Motion', 'Figma'],
    imageUrl: projectImg2,
    url: 'https://audiophile-estore.netlify.app',
    compressedImg: compressedImg2,
  },
  {
    projectName: 'Crappo Cryptocurrency',
    description:
      'A fully responsive landing page for a crypto currency website.',
    stackUsed: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: projectImg3,
    url: 'https://crappo-crypto-page.netlify.app',
    compressedImg: compressedImg3,
  },
  {
    projectName: 'FoodEx Restaurant',
    description:
      'A fully responsive static landing page for a restaurant (foodex). Users can view the restaurant menu, chefs, and also blog post uploaded by the restaurant',
    stackUsed: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: projectImg4,
    url: 'https://foodex-restaurant.netlify.app',
    compressedImg: compressedImg4,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind',
  'Framer Motion',
  'NextJS',
  'React',
  'TypeScript',
  'Figma',
  'Bootstrap',
  'Git/Github',
] as const;
