import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Contact from './components/contact';
import About from './components/about';
import Service from './components/service';
import Footer from './components/footer';

const App = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;