/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Whywe from './whyieee';
import FrameScroll from './scrollcard';
import { useEffect, useContext, Suspense, lazy } from 'react';
import "./home.css"
import EventsPart from './events';
import { ActiveContext } from "./activecontext";

const Heros = React.lazy(() => import('./hero'));

function Home() {
  
  const { setActiveItem } = useContext(ActiveContext);
  setActiveItem(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <Heros />
      <Whywe />
      <EventsPart/>
      <FrameScroll />
      <Footer/>
    </div>
  );
}

export default Home;
