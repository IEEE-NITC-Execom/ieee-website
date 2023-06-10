import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Footer from './Footer';
import Whywe from './whyieee';
import FrameScroll from './scrollcard';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Whywe/>
      <FrameScroll/>
      <Footer/>
    </div>
  );
}

export default Home;