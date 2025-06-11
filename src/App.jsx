import Header from './components/1-header/header';
import HeroSection from './components/2-herosection/hearo'
import Main from './components/3-main/main';
// import Contact from './components/4-contact/contact';
import Footer from './components/5-footer/footer';
// import MM from './components/mmmm/Main'

function App() { 
  
  return (
    <div id='home' className='container'>
      <Header />
     
      <HeroSection />
      <div className='divider' />
      {/* <MM /> */}
      <Main />
      {/* <div className='divider' /> */}
      {/* <Contact /> */}
      <div className='divider' />
      < Footer / >
    </div>
  )
}

export default App