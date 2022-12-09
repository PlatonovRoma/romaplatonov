import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner';
import BannerLeft from './components/BannerLeft';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';



function App() {
  let [active, setActive] = useState(false);
  let modalHandler = () => {
    setActive(!active)
  }

  return (
    <>
      <div className='wrapper'>
        <div className='container' id='home'>
          <Navbar />
          <header>
            <BannerLeft 
              modalHandler={modalHandler} 
              active={active}/>

            <Banner active={active}/>
          </header>        
        </div>

        <Main />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
