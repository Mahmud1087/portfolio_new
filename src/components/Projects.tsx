import { Title } from '../components/main';
import { useScrollView } from '../libs/hooks';

const Projects = () => {
  const { ref } = useScrollView('Projects', 0.75);

  return (
    <div
      ref={ref}
      className='scroll-mt-28 relative flex flex-col gap-8 w-1/2 m-auto items-center text-center'
      id='projects'
    >
      <Title title='Projects' />
    </div>
  );
};
export default Projects;
