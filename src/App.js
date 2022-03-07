import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './assets/App.css';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">

     <BrowserRouter>
            <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
