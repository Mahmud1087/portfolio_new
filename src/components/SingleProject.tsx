import { projectsData } from '../libs/data';

type ProjectProps = (typeof projectsData)[number];

const SingleProject = (project: ProjectProps) => {
  const { projectName, description, imageUrl, stackUsed } = project;

  return (
    <article>
      <div>
        <title>{projectName}</title>
        <p>{description}</p>
        <div>
          {stackUsed.map((stack, i) => {
            return <aside key={i}>{stack}</aside>;
          })}
        </div>
      </div>
      <div>
        <img src={imageUrl} alt='Project Image Screenshot' />
      </div>
    </article>
  );
};
export default SingleProject;
