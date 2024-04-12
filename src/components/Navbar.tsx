import { Logo } from '../components/main';

const Navbar = () => {
  return (
    <div className='fixed top-6 left-1/2 right-1/2 -translate-x-1/2 flex items-center justify-between w-[90%]'>
      <Logo />
    </div>
  );
};
export default Navbar;
