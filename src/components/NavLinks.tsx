import { navMenu } from '../data';

const NavLinks = () => {
  return (
    <ul className='flex gap-12 font-serrat text-[13px] font-semibold text-gray-700 bg-white rounded-full py-3 px-7'>
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
