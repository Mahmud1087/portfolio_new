import { Title } from '../components/main';

const AboutMe = () => {
  return (
    <div
      className='my-28 relative flex flex-col gap-8 w-1/2 m-auto items-center text-center'
      //   id='about'
    >
      <Title title='About Me' />
      <p className='text-lg'>
        After graduating with a degree in{' '}
        <span className='font-semibold'>accounting</span>, I decided to pursue
        my passion for programming. I enrolled in a coding bootcamp and learned{' '}
        <span className='font-semibold'>frontend web development</span>. My{' '}
        <i>favorite part of programming</i> is the problem solving aspect. I
        love the feeling of finally figuring out a solution to a problem. My
        core stack is{' '}
        <span className='font-semibold'>React, and TypeScript</span>. I am
        currently looking for an internship or junior frontend developer roles.
        <br />
        <br />
        When I'm not coding, I enjoy reading books, watching movies, and
        watching football. I also{' '}
        <span className='font-semibold'>enjoy learning new things</span>.
      </p>
      {/* <p className='text-lg'>
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
      </p> */}
    </div>
  );
};
export default AboutMe;
