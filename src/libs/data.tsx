import projectImg1 from '../assets/logistics.png';
import projectImg2 from '../assets/audiophile.png';
import projectImg3 from '../assets/crappo.png';
import projectImg4 from '../assets/foodex.png';

export const navMenu = [
  { id: 1, title: 'Home', link: '#' },
  { id: 2, title: 'About', link: '#about' },
  { id: 3, title: 'Projects', link: '#projects' },
  { id: 4, title: 'Skills', link: '#skills' },
  { id: 5, title: 'Contact', link: '#contact' },
] as const;

export const projectsData = [
  {
    projectName: 'Transit flow Logististcs',
    description:
      'A fully responsive landing page for a logistics company (TransitFlow)',
    stackUsed: ['React', 'TailwindCSS', 'Figma'],
    imageUrl: projectImg1,
    url: 'https://transit-flow-logistics.netlify.app',
  },
  {
    projectName: 'Audiophile E-commerce',
    description:
      'A fully responsive and functional e-commerce website for a company that sells hadphones, earphones, and speakers',
    stackUsed: ['React', 'TailwindCSS', 'Framer Motion', 'Figma'],
    imageUrl: projectImg2,
    url: 'https://audiophile-estore.netlify.app',
  },
  {
    projectName: 'Crappo Cryptocurrency',
    description:
      'A fully responsive landing page for a crypto currency website.',
    stackUsed: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: projectImg3,
    url: 'https://crappo-crypto-page.netlify.app',
  },
  {
    projectName: 'FoodEx Restaurant',
    description:
      'A fully responsive static landing page for a restaurant (foodex). Users can view the restaurant menu, chefs, and also blog post uploaded by the restaurant',
    stackUsed: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: projectImg4,
    url: 'https://foodex-restaurant.netlify.app',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind',
  'Framer Motion',
  'React',
  'TypeScript',
  'Figma',
  'Bootstrap',
] as const;
