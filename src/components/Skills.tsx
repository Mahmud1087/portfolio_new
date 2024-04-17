import { Title } from '../components/main';
import { skillsData } from '../libs/data';
import { useScrollView } from '../libs/hooks';
import { motion } from 'framer-motion';

const Skills = () => {
  const { ref } = useScrollView('Skills', 0.5);
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id='skills'
      ref={ref}
      className='w-[90%] flex flex-col gap-8 text-center scroll-mt-28 sm:w-[70%] lg:w-1/2'
    >
      <Title title='Skills' />
      <div className='flex justify-center gap-3 flex-wrap'>
        {skillsData.map((skill, i) => {
          return (
            <motion.div
              key={i}
              className='bg-white px-4 py-1 border border-black/[0.1] shadow-lg shadow-black/15 rounded-md dark:bg-white/10 dark:font-[300] dark:text-white'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              custom={i}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
