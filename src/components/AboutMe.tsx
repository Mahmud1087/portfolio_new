import { Title } from '../components/main';
import { useScrollView } from '../libs/hooks';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const { ref } = useScrollView('About');

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
      ref={ref}
      className='scroll-mt-28 relative flex flex-col gap-8 w-[88%] m-auto items-center text-center sm:w-3/4 lg:w-1/2'
      id='about'
    >
      <Title title='About Me' />
      <p className='text-lg dark:text-white/70 dark:font-[200] sm:px-6 lg:px-0 '>
        I am a passionate{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          Frontend Developer,
        </span>{' '}
        technical writer, and open source enthusiast. I am a goal-oriented
        person, with good teamwork, ability to communicate well, and also learn
        fast.
        <br />I hold a bachelors degree in{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          Metallurgical and Materials Engineering.
        </span>
        <br />
        My <i>favorite part of programming</i> is the problem solving. My core
        stack is{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          NextJS and TypeScript
        </span>
        . I am currently looking for an internship or junior frontend developer
        roles.
        <br />
        <br />
        When I'm not coding, I enjoy reading books, watching movies, and
        watching football. I also{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          enjoy learning new things and staying up to date with new technologies
        </span>
        .
      </p>
    </motion.div>
  );
};
export default AboutMe;
