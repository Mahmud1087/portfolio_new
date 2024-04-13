import {
  AboutMe,
  Hero,
  HorizontalLine,
  Navbar,
  Projects,
} from './components/main';

function App() {
  return (
    <div className='bg-gray-100 h-full w-full grid place-items-center'>
      <Navbar />
      <Hero />
      <HorizontalLine id='about' />
      <AboutMe />
      <HorizontalLine id='projects' />
      <Projects />
    </div>
  );
}

export default App;
