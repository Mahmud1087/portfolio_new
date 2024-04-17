import { Logo, NavLinks, ThemeSwitcher } from '../components/main';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-40 flex items-center justify-between w-full sm:top-6 sm:left-1/2 sm:right-1/2 sm:-translate-x-1/2 sm:w-[95%] lg:w-[90%]'>
      <Logo />
      <NavLinks />
      <div className='hidden sm:flex'>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
