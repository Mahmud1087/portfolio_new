import {
  FaArrowRightLong,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6';
import userImage from '../assets/headshot-image.jpg';
import { useScrollView } from '../libs/hooks';
import { useActiveSectionContext } from '../context/avtive-section-context';
import { motion } from 'framer-motion';

const Hero = () => {
  const { ref } = useScrollView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div
      ref={ref}
      className='scroll-mt-40 pt-40 h-fit relative grid place-items-center'
      id='#'
    >
      <section className='absolute left-1/2 right-1/2 -translate-x-1/2 w-3/5 rounded-full m-auto blur-[180px] bg-gradient-to-r from-slate-300 to-red-400/80 h-full dark:from-slate-600 dark:to-red-400/70'></section>
      <section className='w-1/2 m-auto grid place-items-center gap-8 relative'>
        <motion.div
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
          }}
          className='w-28 h-28 rounded-full bg-white flex justify-center items-center shadow-2xl shadow-black/70 dark:bg-gray-950/70 dark:shadow-black'
        >
          <img
            src={userImage}
            alt='User image'
            className='w-[93%] h-[93%] rounded-full object-cover'
          />
        </motion.div>

        <motion.div
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
          className='mt-2 flex flex-col gap-10 items-center'
        >
          <h1 className='text-center text-2xl px-16 dark:text-white/90 dark:font-[200]'>
            Hello,{' '}
            <span className='font-semibold dark:font-normal'>
              I'm Mahmud Abdulazeez
            </span>
            . I'm a{' '}
            <span className='font-semibold dark:font-normal'>
              frontend developer, technical writer and open source enthusiast.
            </span>{' '}
            I enjoy building <i>responsive and interactive</i> websites. My
            focus is <u>React</u>
          </h1>
          <aside className='flex gap-4 items-center'>
            <a
              className='group bg-gray-950 rounded-full w-fit flex items-center gap-4 py-[10px] px-6 text-gray-50 hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105'
              href='#contact'
              onClick={() => {
                setActiveSection('Contact');
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{' '}
              <FaArrowRightLong className='text-white/50 group-hover:translate-x-1' />
            </a>
            <a
              className='group bg-white rounded-full w-fit flex items-center gap-3 py-[10px] px-6 font-semibold text-gray-900 hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white dark:font-[400]'
              href='CV.pdf'
              download={true}
            >
              Download CV{' '}
              <FaDownload className='group-hover:translate-y-[1.5px] text-gray-500 text-sm transition-all dark:text-gray-900' />
            </a>
            <a
              className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white/70'
              href='https://www.linkedin.com/in/enesifrontenddev'
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a
              className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white/70'
              href='https://www.github.com/Mahmud1087'
              target='_blank'
            >
              <FaGithub />
            </a>
          </aside>
        </motion.div>
      </section>
    </div>
  );
};
export default Hero;
