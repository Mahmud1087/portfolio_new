import {
  FaArrowRightLong,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6';
// import userImage from '../assets/headshot-image.jpg';
// import userImage from '../assets/image4.jpg';
import userImage from '../assets/img.jpg';
import userImageCompressed from '../assets/compressed/img.jpg';
// import userImage from '../assets/image3.jpg';
import { useScrollView } from '../libs/hooks';
import { useActiveSectionContext } from '../context/avtive-section-context';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
  const { ref } = useScrollView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div
      ref={ref}
      className='scroll-mt-40 pt-40 h-fit relative grid place-items-center'
      id='#'
    >
      <section className='absolute left-1/2 right-1/2 -translate-x-1/2 w-full rounded-full m-auto blur-[180px] bg-gradient-to-r from-slate-300 to-red-400/80 h-full dark:from-slate-600 dark:to-red-400/70 lg:w-3/5'></section>
      <section className='w-[90%] m-auto grid place-items-center gap-8 relative sm:w-3/4 lg:w-3/5'>
        <motion.div
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
          }}
          className='w-32 h-32 rounded-full bg-white flex justify-center items-center shadow-2xl shadow-black/70 dark:bg-gray-950/70 dark:shadow-black'
        >
          <LazyLoadImage
            placeholderSrc={userImageCompressed}
            effect='blur'
            wrapperProps={{
              style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
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
          <h1 className='text-center text-2xl px-5 dark:text-white/90 dark:font-[200] sm:px-16'>
            {/* Hello,{' '}
            <span className='font-semibold dark:font-normal'>
              I'm Mahmud Abdulazeez
            </span>
            . I'm a{' '} */}
            <span className='font-semibold dark:font-normal'>
              Frontend developer
            </span>
            <br />
            Builds <i>beautiful, responsive and interactive</i> websites using{' '}
            <u>
              <b>ReactJS/NextJS</b>
            </u>
          </h1>
          <aside className='w-full flex flex-col-reverse gap-6 items-center'>
            <div className='flex flex-col items-center gap-5 w-full md:flex-row md:justify-center'>
              <a
                className='group bg-gray-950 rounded-full w-fit flex justify-center items-center gap-4 py-[10px] px-6 text-gray-50 hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105'
                href='#contact'
                onClick={() => {
                  setActiveSection('Contact');
                  setTimeOfLastClick(Date.now());
                }}
              >
                Send an Email{' '}
                <FaArrowRightLong className='text-white/50 group-hover:translate-x-1' />
              </a>
              <a
                className='group bg-white rounded-full w-fit flex justify-center items-center gap-3 py-[10px] px-6 font-semibold text-gray-900 hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white dark:font-[400]'
                href='Resume.pdf'
                download={true}
              >
                Download CV{' '}
                <FaDownload className='group-hover:translate-y-[1.5px] text-gray-500 text-sm transition-all dark:text-gray-900' />
              </a>
            </div>
            <div className='flex gap-4 mt-4 sm:mt-0'>
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
            </div>
          </aside>
        </motion.div>
      </section>
    </div>
  );
};
export default Hero;
