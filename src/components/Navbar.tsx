import { FaMoon } from 'react-icons/fa6';
import { Logo, NavLinks } from '../components/main';

const Navbar = () => {
  return (
    <div className='fixed top-6 z-40 left-1/2 right-1/2 -translate-x-1/2 flex items-center justify-between w-[90%]'>
      <Logo />
      <NavLinks />
      <button name='dark-mode-button' type='button'>
        <FaMoon />
      </button>
    </div>
  );
};
export default Navbar;
