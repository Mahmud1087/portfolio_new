import { FaMoon } from 'react-icons/fa6';
import { Logo, NavLinks } from '../components/main';
import { useDarkModeCotext } from '../context/dark-mode-context';
import { MdLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useDarkModeCotext();
  return (
    <motion.nav
      initial={{ x: '-50%', y: -1000, opacity: 0 }}
      animate={{ x: '-50%', y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      className='fixed top-6 z-40 left-1/2 right-1/2 -translate-x-1/2 flex items-center justify-between w-[90%]'
    >
      <Logo />
      <NavLinks />
      <button
        name='dark-mode-button'
        type='button'
        className='text-sm text-gray-700 outline-none transition-all bg-white h-8 w-8 rounded-full flex items-center justify-center border border-black/10 shadow-lg shadow-black/20 hover:scale-110  hover:text-gray-950 active:scale-105 dark:text-gray-200 dark:bg-gray-900 dark:hover:text-white dark:border-gray-50/30'
        onClick={toggleTheme}
      >
        {theme === 'light' ? <MdLightMode /> : <FaMoon />}
      </button>
    </motion.nav>
  );
};
export default Navbar;
