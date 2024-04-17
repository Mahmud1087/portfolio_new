import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

const Footer = () => {
  return (
    <footer className='mt-52 mb-10 text-center dark:text-white/70 dark:font-[200]'>
      <p>&copy; 2024 Mahmud Abdulazeez. All rights reserved.</p>
      <p className='font-semibold mt-5'>
        Built with React, Typescript, Tailwind CSS, Framer Motion, and EmailJs
      </p>
      <section className='mt-12 flex justify-center items-center gap-8'>
        <a
          className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white/70'
          href='https://www.linkedin.com/in/enesifrontenddev'
          target='_blank'
        >
          <FaLinkedin />
        </a>
        <a
          className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white/70'
          href='https://twitter.com/MahmudEnesi'
          target='_blank'
        >
          <FaTwitter />
        </a>
        <a
          className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white/70'
          href='https://www.github.com/Mahmud1087'
          target='_blank'
        >
          <FaGithub />
        </a>
      </section>

      {/* Arrow to go back up */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        href='#'
        className='fixed right-4 bottom-6 h-8 w-8 flex justify-center items-center bg-gray-900 p-2 rounded-full text-white hover:bg-gray-950 hover:scale-110 active:scale-105 group transition-all dark:bg-gray-50/50 dark:hover:bg-gray-50/70 dark:text-gray-950 sm:right-16 sm:bottom-10'
      >
        <FaArrowUp className='text-sm group-hover:-translate-y-1 transition-all' />
      </motion.a>

      <div className='fixed left-4 bottom-6 sm:hidden'>
        <ThemeSwitcher />
      </div>
    </footer>
  );
};
export default Footer;
