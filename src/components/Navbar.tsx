import { FaMoon } from 'react-icons/fa6';
import { Logo, NavLinks } from '../components/main';
import { useDarkModeCotext } from '../context/dark-mode-context';
import { MdLightMode } from 'react-icons/md';

const Navbar = () => {
  const { theme, toggleTheme } = useDarkModeCotext();
  return (
    <div className='fixed top-6 z-40 left-1/2 right-1/2 -translate-x-1/2 flex items-center justify-between w-[90%]'>
      <Logo />
      <NavLinks />
      <button
        name='dark-mode-button'
        type='button'
        className='text-xl text-gray-600 outline-none transition'
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <FaMoon />
        ) : (
          <MdLightMode className='text-gray-400' />
        )}
      </button>
    </div>
  );
};
export default Navbar;
