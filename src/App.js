import React from 'react';
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

  return (
    <ActiveContext.Provider value={{activeItem, setActiveItem}}>
      <div className="App">
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
      </div>
      </ActiveContext.Provider>
  );
}

export default App;