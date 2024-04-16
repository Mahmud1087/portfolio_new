import {
  AboutMe,
  ContactMe,
  Hero,
  HorizontalLine,
  Navbar,
  Projects,
  Skills,
} from './components/main';
import ActiveSectionProvider from './context/avtive-section-context';
import DarkModeContextProvider from './context/dark-mode-context';

function App() {
  return (
    <div className='bg-gray-100 pb-32 h-full w-full grid place-items-center dark:bg-gray-900'>
      <ActiveSectionProvider>
        <DarkModeContextProvider>
          <Navbar />
          <Hero />
          <HorizontalLine />
          <AboutMe />
          <HorizontalLine />
          <Projects />
          <HorizontalLine />
          <Skills />
          <HorizontalLine />
          <ContactMe />
        </DarkModeContextProvider>
      </ActiveSectionProvider>
    </div>
  );
}

export default App;
