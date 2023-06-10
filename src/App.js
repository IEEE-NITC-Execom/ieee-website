import React from 'react';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from "./pages/gallery"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={ 
            <Home />} />
          <Route path="/" element={ 
            <Home />} />
          <Route path="/gallery" element={ 
            <Gallery />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;