import { FaMoon } from 'react-icons/fa6';
import { MdLightMode } from 'react-icons/md';
import { useDarkModeCotext } from '../context/dark-mode-context';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useDarkModeCotext();

  return (
    <button
      name='dark-mode-button'
      type='button'
      className='flex text-sm text-gray-700 outline-none transition-all bg-white h-8 w-8 rounded-full items-center justify-center border border-black/10 shadow-lg shadow-black/20 hover:scale-110  hover:text-gray-950 active:scale-105 dark:text-gray-200 dark:bg-gray-900 dark:hover:text-white dark:border-gray-50/30'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <MdLightMode /> : <FaMoon />}
    </button>
  );
};
export default ThemeSwitcher;
