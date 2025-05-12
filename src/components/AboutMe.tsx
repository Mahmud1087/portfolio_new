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
      className='scroll-mt-48 relative flex flex-col gap-8 w-[88%] m-auto items-center text-center sm:w-3/4 lg:w-1/2'
      id='about'
    >
      <Title title='About Me' />
      <p className='text-lg dark:text-white/70 dark:font-[200] sm:px-6 lg:px-0 '>
        I specialize in building cutting-edge user interfaces using{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          React.js, Next.js, TypeScript, and Tailwind CSS.{' '}
        </span>
        My strength lies in transforming design concepts into powerful,
        user-friendly digital experiences that help businesses make a real
        impact.
        <br />
        Through internships and collaborative team projects, I've deveoploed my
        skills in building live products that not only{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          look great but perform exceptionally.
        </span>
        <br />
        <br />
        {/* My approach combines technical expertise with a keen eye for design,
        ensuring every project delivers tangible value.
        <br /> */}
        Whether it's{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          optimizing performance, creating pixel-perfect responsive designs, or
          integrating complex APIs,
        </span>
        I'm committed to solving real-world challenges.
        <br />
        <br />
        My professional philosophy is simple:{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          never stop learning.{' '}
        </span>
        I'm constantly exploring the{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          latest frontend technologies,{' '}
        </span>
        pushing the boundaries of what's possible in web development. This
        commitment allows me to bring{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          fresh, innovative solutions{' '}
        </span>
        to every project and teams I work with.
        {/* I am a{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          Frontend Developer,
        </span>{' '}
        proficient with ReactJs, NextJs, Typescript, and Tailwind for styling.
        I'm a goal-oriented person, with good teamwork, ability to communicate
        well, and also learn fast. These skills I got from working with people
        on live products, internships, and work settings.
        <br />I hold a bachelors degree in{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          Metallurgical and Materials Engineering.
        </span>
        <br />
        My <i>favorite part of programming</i> is the problem solving.
        My core
        stack is{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          ReactJS and TypeScript
        </span>
        <br />
        <br />
        When I'm not coding, I enjoy reading books, watching movies, and
        watching football. I also{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          enjoy learning new things and staying up to date with new technologies
        </span>
        . */}
      </p>
    </motion.div>
  );
};
export default AboutMe;
