import { Title } from '../components/main';

const AboutMe = () => {
  return (
    <div
      className='my-28 relative flex flex-col gap-8 w-1/2 m-auto items-center text-center'
      //   id='about'
    >
      <Title title='About Me' />
      <p className='text-lg'>
        Hello! I am Abdulazeez Mahmud Enesi, a passionate junior front-end
        developer and an aspiring technical writer. I hold a B. Eng. in
        Metallurgical and Materials Engineering from Ahmadu Bello University
        (ABU), Nigeria and proudly a Graduate Member of the Nigeria Society of
        Engineers (GMNSE). I embarked on my tech journey in 2022, starting with
        front-end development. Committed to continuous learning and growth. I
        specialize in building interactive and aesthetically pleasing web
        interfaces.
        <br />
        <br />I am passionate about technical writing and also enthusiastic
        about discussing front-end development and tech in general.I am open to
        internships, junior frontend roles, and also collaborating on web
        development projects.
      </p>
    </div>
  );
};
export default AboutMe;
