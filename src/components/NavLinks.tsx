import { navMenu } from '../libs/data';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useActiveSectionContext } from '../context/avtive-section-context';

const NavLinks = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <ul className='flex gap-5 gap-y-2 justify-center items-center font-spartan bg-white backdrop-filter backdrop-blur-[10px] bg-opacity-80 py-[10px] px-5 tracking-wider border border-black/10 shadow-lg shadow-black/10 dark:bg-gray-950 dark:bg-opacity-80 w-full flex-wrap sm:rounded-full sm:gap-12 sm:gap-y-0 sm:justify-start sm:px-7 sm:py-[10px] sm:flex-nowrap sm:w-fit'>
      {navMenu.map((menu, i) => {
        const { title, link } = menu;
        return (
          <li key={i} className='relative px-[10px] py-[2px]'>
            <a
              href={link}
              className={clsx(
                'text-gray-500 transition-all hover:text-gray-950 dark:text-white/70 dark:font-[250] dark:hover:text-white',
                {
                  'text-gray-950 dark:text-white/100': activeSection === title,
                }
              )}
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
                className='absolute inset-0 bg-gray-200 -z-10 rounded-full dark:bg-gray-800'
              ></motion.span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
