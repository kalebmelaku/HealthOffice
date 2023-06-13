import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Contact from './components/contact';
import About from './components/about';
import Service from './components/service';

const App = () => {

  return (
    <>
      <Navbar />
      <HeroSection/>
      <Service/>
      <About/>
      <Contact/>
    </>
  )
}

export default App