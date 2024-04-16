import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='mt-52 mb-10 text-center dark:text-white/70 dark:font-[200]'>
      <p>&copy; 2024 Mahmud Abdulazeez. All rights reserved.</p>
      <p>
        Built with React, Typescript, Tailwind CSS, Framer Motion, and EmailJs
      </p>
      <section className='mt-12 flex justify-center items-center gap-8'>
        <a
          className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white/70'
          href='https://www.linkedin.com/in/enesifrontenddev'
          target='_blank'
        >
          <FaLinkedin />
        </a>
        <a
          className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white/70'
          href='https://www.linkedin.com/in/enesifrontenddev'
          target='_blank'
        >
          <FaTwitter />
        </a>
        <a
          className='bg-white rounded-full w-10 h-10 grid place-items-center text-gray-900 text-lg hover:scale-110 transition shadow-xl shadow-black/20 active:scale-105 dark:bg-white/20 dark:text-white/70'
          href='https://www.linkedin.com/in/enesifrontenddev'
          target='_blank'
        >
          <FaGithub />
        </a>
      </section>
    </footer>
  );
};
export default Footer;
