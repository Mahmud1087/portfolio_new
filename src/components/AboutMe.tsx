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
        Hi, I’m Abdulazeez — a Frontend Developer who believes good design
        builds trust and performance builds loyalty. At BellBank Microfinance
        Bank, I’ve worked on several fintech platforms where I handled the
        entire frontend — from architecture and API integration to dashboards
        that help people track, manage, and grow their businesses. One thing
        people often notice about me is adaptability. I’ve jumped into projects
        that required learning completely new technologies — and instead of
        being intimidated, I saw them as opportunities to grow and deliver
        results. Another is creativity. On one project, when a design update was
        urgently needed, I created and implemented the interface myself —
        turning a potential delay into a win that saved time, reduced cost, and
        got me recognized by leadership. And through it all, I’ve learned that
        effective communication is just as important as code — asking the right
        questions, collaborating openly, and aligning ideas to build something
        that truly solves problems. I’m passionate about creating clean,
        conversion-driven interfaces that make people’s lives easier — and I’m
        always excited to work with teams that value excellence, innovation, and
        impact
        {/* I specialize in building web solutions using{' '}
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
        <br /> */}
        {/* My approach combines technical expertise with a keen eye for design,
        ensuring every project delivers tangible value.
        <br /> */}
        {/* Whether it's{' '}
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
        to every project and teams I work with. */}
      </p>
    </motion.div>
  );
};
export default AboutMe;
