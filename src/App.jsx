import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Contact from './components/contact';
import About from './components/about';
import Service from './components/service';
import Footer from './components/footer';
import FacebookPost from './components/fbPost';

const App = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FacebookPost/>
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;