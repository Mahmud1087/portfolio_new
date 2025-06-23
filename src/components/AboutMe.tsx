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
        I specialize in building web solutions using{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          React.js, Next.js, TypeScript, Tailwind CSS as my core stack.{' '}
        </span>
        My strength lies in transforming designs into clean, responsive, and
        functional web apps that help businesses achieve their business goals.
        <br />I have worked with teams to build products that not only{' '}
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
        <br />I believe{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          learning never stops.{' '}
        </span>
        Hence why I'm constantly upskilling with the{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          latest frontend tools and technologies.{' '}
        </span>
        This commitment allows me to bring{' '}
        <span className='font-semibold dark:font-normal dark:text-white'>
          fresh, innovative solutions{' '}
        </span>
        to every project and teams I work with.
      </p>
    </motion.div>
  );
};
export default AboutMe;
