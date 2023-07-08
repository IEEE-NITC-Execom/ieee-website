import React, { useEffect } from 'react';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from "./pages/gallery"
import Chapters from './pages/chapters';
import AboutUs from "./pages/aboutus";
import { ActiveContext } from './activecontext';
import { useState } from 'react';
import EventPart from './pages/eventprogress';
import "./App.css"

function App() {

  const [activeItem, setActiveItem] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const imgs = [
      "./assets/back.jpg",
      "./assets/scrollimages/1a.jpg",
      "./assets/scrollimages/2a.jpg",
      "./assets/scrollimages/3a.jpg",
      "./assets/scrollimages/4.jpg",
      "./assets/scrollimages/5.jpg",
      "./assets/scrollimages/6.jpg",
      "./assets/scrollimages/7.jpg",
      "./assets/scrollimages/8.jpg",
      "./assets/scrollimages/9.jpg",
      "./assets/scrollimages/10.jpg",
      "./assets/scrollimages/11.jpg",
      "./assets/scrollimages/12.jpg",
      "./assets/scrollimages/13.jpg",
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  }

  return (
    <ActiveContext.Provider value={{activeItem, setActiveItem}}>
      <div className="App">
        {
          isLoading ?
            <div className='spinner'>
              Spinning
            </div>
            :
            <BrowserRouter>
              <Routes>
                <Route index element={ 
                  <Home />} />
                <Route exact path="/home" element={ 
                  <Home />} />
                <Route path="/gallery" element={ 
                  <Gallery />} />
                <Route path="/chapters" element={ 
                    <Chapters />} />
                <Route path="/about" element={
                    <AboutUs />} />
                <Route path="/events" element={
                    <EventPart />} />
              </Routes>
            </BrowserRouter>
        }
      </div>
      </ActiveContext.Provider>
  );
}

export default App;