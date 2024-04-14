import {
  FaArrowRightLong,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6';
import userImage from '../assets/headshot-image.jpg';
import { useScrollView } from '../libs/hooks';

const Hero = () => {
  const { ref } = useScrollView('Home', 0.5);

  return (
    <div
      ref={ref}
      className='scroll-mt-40 mt-40 h-fit relative grid place-items-center'
      id='#'
    >
      <section className='absolute left-1/2 right-1/2 -translate-x-1/2 w-3/5 rounded-full m-auto blur-[180px] bg-gradient-to-r from-slate-300 to-red-200 h-full'></section>
      <section className='w-1/2 m-auto grid place-items-center gap-8 relative'>
        <div className='w-28 h-28 rounded-full bg-white flex justify-center items-center shadow-2xl shadow-black/70'>
          <img
            src={userImage}
            alt='User image'
            className='w-[93%] h-[93%] rounded-full object-cover'
          />
        </div>
        <h1 className='text-center text-2xl px-16'>
          Hello, <span className='font-semibold'>I'm Mahmud Abdulazeez</span>.
          I'm a{' '}
          <span className='font-semibold'>
            frontend developer, technical writer and open source enthusiast.
          </span>{' '}
          I enjoy building <i>responsive and interactive</i> websites. My focus
          is <u>React</u>
        </h1>
        <aside className='flex gap-4 items-center'>
          <a
            className=' bg-gray-950 rounded-full w-fit flex items-center gap-4 py-[10px] px-6 text-gray-50 hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105'
            href='#contact'
          >
            Contact me here <FaArrowRightLong className='text-white/50' />
          </a>
          <a
            className=' bg-white rounded-full w-fit flex items-center gap-2 py-[10px] px-6 font-semibold text-gray-900 hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105'
            href='CV2.pdf'
            download={true}
          >
            Download CV <FaDownload className='text-gray-500 text-sm' />
          </a>
          <a
            className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105'
            href='https://www.linkedin.com/in/enesifrontenddev'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a
            className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105'
            href='https://www.github.com/Mahmud1087'
            target='_blank'
          >
            <FaGithub />
          </a>
        </aside>
      </section>
    </div>
  );
};
export default Hero;