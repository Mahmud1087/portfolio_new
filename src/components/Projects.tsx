import React from 'react';
import { SingleProject, Title } from '../components/main';
import { projectsData } from '../libs/data';
import { useScrollView } from '../libs/hooks';

const Projects = () => {
  const { ref } = useScrollView('Projects', 0.75);

  return (
    <section
      ref={ref}
      className='scroll-mt-28 relative flex flex-col gap-8 w-1/2 m-auto items-center text-center'
      id='projects'
    >
      <Title title='Projects' />
      <div>
        {projectsData.map((project, i) => {
          return (
            <React.Fragment key={i}>
              <SingleProject {...project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
