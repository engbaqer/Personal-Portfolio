import Header from './components/1-header/header';
import HeroSection from './components/2-herosection/hearo'
import Projectes from './components/3-projectes/projectes';
import Contact from './components/4-contact/contact';
import Footer from './components/5-footer/footer';
import Certificate from './components/4-Certificate/Certificate'
// import MM from './components/mmmm/Main'
import { useState , useEffect } from 'react';
function projectes() { 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scrollY, setScrollY] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

console.log(scrollY); 
  return (
    <div id='home' className='container'>
      <Header />
     
      <HeroSection />
      <div className='divider' />
      {/* <MM /> */}
      <Projectes />
      <div className='divider' />
      <Contact />
         {/* <div className='divider' /> */}
         {/* <Certificate /> */}
      <div className='divider' />
      < Footer / >
    </div>
  )
}

export default projectes