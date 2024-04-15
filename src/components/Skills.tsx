import { Title } from '../components/main';
import { skillsData } from '../libs/data';
import { useScrollView } from '../libs/hooks';

const Skills = () => {
  const { ref } = useScrollView('Projects', 0.9);
  return (
    <section
      id='skills'
      ref={ref}
      className='w-1/2 flex flex-col gap-8 text-center'
    >
      <Title title='Skills' />
      <div className='flex justify-center gap-4 flex-wrap'>
        {skillsData.map((skill, i) => {
          return (
            <div
              key={i}
              className='bg-white/60 px-4 py-1 border border-black/10 shadow-lg shadow-black/15 rounded-md'
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
