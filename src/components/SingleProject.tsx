import { projectsData } from '../libs/data';

type ProjectProps = (typeof projectsData)[number];

const SingleProject = (project: ProjectProps) => {
  const { projectName, description, imageUrl, stackUsed } = project;

  return (
    <article className='flex relative w-full h-80 bg-gray-200 rounded-xl border border-black/10 shadow-lg shadow-black/15 overflow-hidden'>
      <div className='w-1/2 h-full flex flex-col text-start pl-8 pt-10 pr-8'>
        <h1 className='text-2xl font-semibold mb-5'>{projectName}</h1>
        <p className=' font-lato'>{description}</p>
        <div className='mt-auto mb-12 flex gap-1 flex-wrap'>
          {stackUsed.map((stack, i) => {
            return (
              <aside
                key={i}
                className='bg-gray-800 text-gray-50 font-serrat text-xs rounded-full px-3 py-1'
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
          className='absolute w-full shadow-2xl shadow-black h-full top-10 -right-6 object-cover rounded-xl'
        />
      </div>
    </article>
  );
};
export default SingleProject;
