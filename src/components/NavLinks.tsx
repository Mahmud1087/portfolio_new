import { navMenu } from '../libs/data';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useActiveSectionContext } from '../context/avtive-section-context';

const NavLinks = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <ul className='flex gap-12 items-center font-spartan bg-white backdrop-filter backdrop-blur-[10px] bg-opacity-80 rounded-full py-[10px] px-7 tracking-wider '>
      {navMenu.map((menu) => {
        const { id, title, link } = menu;
        return (
          <li key={id} className='relative px-[10px] py-[2px]'>
            <a
              href={link}
              className={clsx('text-gray-500 transition hover:text-gray-950', {
                'text-gray-950': activeSection === title,
              })}
              onClick={() => {
                setActiveSection(title);
                setTimeOfLastClick(Date.now());
              }}
            >
              {title}
            </a>
            {title === activeSection && (
              <motion.span
                layoutId='activeSection'
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
                className='absolute inset-0 bg-gray-200 -z-10 rounded-full'
              ></motion.span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
