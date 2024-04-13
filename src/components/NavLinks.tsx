import { navMenu } from '../data';

const NavLinks = () => {
  return (
    <ul className='flex gap-14 items-center font-spartan bg-white backdrop-filter backdrop-blur-[10px] bg-opacity-80 rounded-full py-3 px-7 tracking-wider'>
      {navMenu.map((menu) => {
        const { id, title, link } = menu;
        return (
          <li key={id}>
            <a href={link}>{title}</a>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
