import { AboutMe, Hero, HorizontalLine, Navbar } from './components/main';

function App() {
  return (
    <div className='bg-gray-100 h-full w-full grid place-items-center'>
      <Navbar />
      <Hero />
      <HorizontalLine />
      <AboutMe />
      <HorizontalLine />
    </div>
  );
}

export default App;
