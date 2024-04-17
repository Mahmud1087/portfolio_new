import { useRef } from 'react';
import { projectsData } from '../libs/data';
import { useScroll, useTransform, motion } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

const SingleProject = (project: ProjectProps) => {
  const { projectName, description, imageUrl, stackUsed, url } = project;

  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0.85 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);

  return (
    <motion.a
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      href={url}
      target='_blank'
      className='group flex flex-col-reverse relative w-full h-fit bg-gray-200 rounded-xl border border-black/10 shadow-lg shadow-black/15 overflow-hidden hover:bg-gray-300 transition-all dark:bg-white/10 dark:hover:bg-white/20 sm:even:flex-row-reverse sm:flex-row sm:h-80'
    >
      <div className='w-full h-full flex flex-col text-start pt-5 px-5 sm:pt-10 sm:px-8 sm:w-1/2'>
        <h1 className='text-2xl font-semibold mb-3 dark:font-normal dark:text-white sm:mb-5'>
          {projectName}
        </h1>
        <p className=' dark:font-[200] dark:text-white/85 mb-6 sm:mb-0'>
          {description}
        </p>
        <div className='mt-auto mb-8 flex gap-x-1 gap-y-2 flex-wrap sm:mb-12'>
          {stackUsed.map((stack, i) => {
            return (
              <aside
                key={i}
                className='bg-gray-800 text-gray-50 font-serrat text-xs rounded-full px-3 py-1 border border-gray-200/30 shadow-lg shadow-black/50 dark:bg-gray-900 dark:border-none'
              >
                {stack}
              </aside>
            );
          })}
        </div>
      </div>
      <div className='relative w-full h-56 p-3 sm:p-0 sm:h-full sm:w-1/2'>
        <img
          src={imageUrl}
          alt='Project Image Screenshot'
          className='relative w-full shadow-lg shadow-black/40 h-full object-cover rounded-xl
           sm:absolute sm:top-6 sm:-right-7 sm:shadow-2xl sm:shadow-black sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-3 sm:group-hover:scale-[1.03] transition sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-3 sm:group-even:group-hover:scale-[1.03 sm:group-even:-left-7'
        />
      </div>
    </motion.a>
  );
};
export default SingleProject;
