import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Contact from './components/contact';
import About from './components/about';
import Service from './components/service';
import Footer from './components/footer';
import FacebookPost from './components/fbPost';
import LatestNews from './components/latestNews';

const App = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FacebookPost />
      {/* <LatestNews/> */}
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;