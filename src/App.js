import React from 'react';
import Routes from './routes';
import Footer from './footer';
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
