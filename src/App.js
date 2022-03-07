import React from 'react';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import './assets/App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Drivers from './pages/Drivers';
import Login from './pages/Login';
import Tracks from './pages/Tracks';


function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Drivers" element={<Drivers />} />
            <Route path="Tracks" element={<Tracks />} />
            <Route path="Login" element={<Login />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

/*<Route path="Drivers" element={<Drivers />} />
        <Route path="Tracks" element={<Tracks />} />
        <Route path="Login" element={<Login />} />
        <Route path="Contact" element={<Contact />} />
        */

export default App;
