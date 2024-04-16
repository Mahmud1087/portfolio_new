import { FaArrowUp } from 'react-icons/fa6';
import {
  AboutMe,
  ContactMe,
  Footer,
  Hero,
  HorizontalLine,
  Navbar,
  Projects,
  Skills,
} from './components/main';
import ActiveSectionProvider from './context/avtive-section-context';
import DarkModeContextProvider from './context/dark-mode-context';
import {} from 'react-icons';

function App() {
  return (
    <div className='bg-gray-100 h-full w-full grid place-items-center dark:bg-gray-900'>
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
          <Footer />
          <a
            href='#'
            className='fixed right-16 bottom-10 h-fit w-fit bg-gray-900 p-2 rounded-full text-white hover:bg-gray-950 hover:scale-110 active:scale-105 group transition-all dark:bg-gray-50/50 dark:hover:bg-gray-50/70 dark:text-gray-950'
          >
            <FaArrowUp className='group-hover:-translate-y-1 transition-all' />
          </a>
        </DarkModeContextProvider>
      </ActiveSectionProvider>
    </div>
  );
}

export default App;
