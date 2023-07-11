import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Footer from './Footer';
import Whywe from './whyieee';
import FrameScroll from './scrollcard';
import { useEffect,useContext } from 'react';
import "./home.css"
import EventsPart from './events';
import { ActiveContext } from "./activecontext";

function Home() {
  
  const { setActiveItem } = useContext(ActiveContext);
  setActiveItem(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Whywe />
      <EventsPart/>
      <FrameScroll />
      <Footer/>
    </div>
  );
}

export default Home;