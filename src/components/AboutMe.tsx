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
      className='scroll-mt-28 relative flex flex-col gap-8 w-1/2 m-auto items-center text-center'
      id='about'
    >
      <Title title='About Me' />
      <p className='text-lg dark:text-white/70 dark:font-[200]'>
        After graduating with a degree in{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          accounting
        </span>
        , I decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          frontend web development
        </span>
        . My <i>favorite part of programming</i> is the problem solving aspect.
        I love the feeling of finally figuring out a solution to a problem. My
        core stack is{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          React, and TypeScript
        </span>
        . I am currently looking for an internship or junior frontend developer
        roles.
        <br />
        <br />
        When I'm not coding, I enjoy reading books, watching movies, and
        watching football. I also{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          enjoy learning new things
        </span>
        .
      </p>
      {/* <p className='text-lg'>
        Hello! I am Abdulazeez Mahmud Enesi, a passionate junior front-end
        developer and an aspiring technical writer. I hold a B. Eng. in
        Metallurgical and Materials Engineering from Ahmadu Bello University
        (ABU), Nigeria and proudly a Graduate Member of the Nigeria Society of
        Engineers (GMNSE). I embarked on my tech journey in 2022, starting with
        front-end development. Committed to continuous learning and growth. I
        specialize in building interactive and aesthetically pleasing web
        interfaces.
        <br />
        <br />I am passionate about technical writing and also enthusiastic
        about discussing front-end development and tech in general.I am open to
        internships, junior frontend roles, and also collaborating on web
        development projects.
      </p> */}
    </motion.div>
  );
};
export default AboutMe;
