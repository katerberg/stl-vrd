import React from 'react';
import Routes from './routes';
import Footer from './footer';
import { BrowserRouter } from "react-router-dom";
import background from './static/background.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <img className="background" alt={'background'} src={background} />
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
