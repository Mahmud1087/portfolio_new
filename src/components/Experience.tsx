import { experiences } from '../libs/data';
import { useScrollView } from '../libs/hooks';
import Title from './Title';
import { motion } from 'framer-motion';

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const Experience = () => {
  const { ref } = useScrollView('Experience', 0.1);

  return (
    <section
      ref={ref}
      className='scroll-mt-28 relative w-[90%] m-auto flex flex-col items-center gap-8 text-center sm:w-[70%] lg:w-full'
      id='experience'
    >
      <Title title='Experience' />

      <div className='relative w-full max-w-6xl mx-auto'>
        {/* Center line */}
        <div className='absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300 dark:bg-gray-600'></div>

        {/* Timeline items */}
        <div className='relative'>
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={timelineVariants}
                className='mb-16'
              >
                <div className='flex flex-col items-center lg:items-stretch lg:flex-row'>
                  {/* Left content */}
                  {isLeft ? (
                    <>
                      <div className='w-full lg:w-1/2 justify-end pr-6 hidden lg:flex'>
                        <div className='bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md text-left w-full max-w-md'>
                          <h3 className='text-lg font-semibold text-blue-600'>
                            {exp.title}
                          </h3>
                          <p className='text-sm text-gray-700 dark:text-gray-300'>
                            {exp.company} &middot; {exp.period}
                          </p>
                          <p className='mt-2 text-gray-600 dark:text-gray-400 text-sm'>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                      <div className='-ml-5 relative z-10'>
                        <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900'>
                          {exp.icon}
                        </div>
                      </div>
                      <div className='w-full lg:w-1/2 lg:pl-6 lg:hidden'>
                        <div className='bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md text-left mt-4 lg:mt-0 w-full max-w-md mx-auto'>
                          <h3 className='text-lg font-semibold text-blue-600'>
                            {exp.title}
                          </h3>
                          <p className='text-sm text-gray-700 dark:text-gray-300'>
                            {exp.company} &middot; {exp.period}
                          </p>
                          <p className='mt-2 text-gray-600 dark:text-gray-400 text-sm'>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='w-full lg:w-1/2 lg:pr-6 hidden lg:block'></div>
                      <div className='relative z-10'>
                        <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900'>
                          {exp.icon}
                        </div>
                      </div>
                      <div className='w-full lg:w-1/2 lg:pl-6'>
                        <div className='bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md text-left mt-4 lg:mt-0 w-full max-w-md'>
                          <h3 className='text-lg font-semibold text-blue-600'>
                            {exp.title}
                          </h3>
                          <p className='text-sm text-gray-700 dark:text-gray-300'>
                            {exp.company} &middot; {exp.period}
                          </p>
                          <p className='mt-2 text-gray-600 dark:text-gray-400 text-sm'>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
