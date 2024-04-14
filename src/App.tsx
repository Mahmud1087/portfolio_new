import {
  AboutMe,
  Hero,
  HorizontalLine,
  Navbar,
  Projects,
} from './components/main';
import ActiveSectionProvider from './context/avtive-section-context';

function App() {
  return (
    <div className='bg-gray-100 h-full w-full grid place-items-center'>
      <ActiveSectionProvider>
        <Navbar />
        <Hero />
        <HorizontalLine />
        <AboutMe />
        <HorizontalLine />
        <Projects />
      </ActiveSectionProvider>
    </div>
  );
}

export default App;
