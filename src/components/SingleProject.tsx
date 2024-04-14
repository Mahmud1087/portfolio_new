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
      className='group even:flex-row-reverse flex relative w-full h-80 bg-gray-200 rounded-xl border border-black/10 shadow-lg shadow-black/15 overflow-hidden hover:bg-gray-300 transition'
    >
      <div className='w-1/2 h-full flex flex-col text-start pl-8 pt-10 pr-8'>
        <h1 className='text-2xl font-semibold mb-5'>{projectName}</h1>
        <p className=' font-lato'>{description}</p>
        <div className='mt-auto mb-12 flex gap-x-1 gap-y-2 flex-wrap'>
          {stackUsed.map((stack, i) => {
            return (
              <aside
                key={i}
                className='bg-gray-800 text-gray-50 font-serrat text-xs rounded-full px-3 py-1 border border-gray-200/30 shadow-lg shadow-black/50'
              >
                {stack}
              </aside>
            );
          })}
        </div>
      </div>
      <div className='relative w-1/2 h-full'>
        <img
          src={imageUrl}
          alt='Project Image Screenshot'
          className='absolute w-full shadow-2xl shadow-black h-full top-6 -right-7 object-cover rounded-xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 group-hover:scale-[1.03] transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3 group-even:group-hover:scale-[1.03 group-even:-left-7'
        />
      </div>
    </motion.a>
  );
};
export default SingleProject;
