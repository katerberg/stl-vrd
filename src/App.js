import React from 'react';
import Routes from './routes';
import Footer from './footer';
import { HashRouter } from 'react-router-dom'
import background from './static/background.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <img className="background" alt={'background'} src={background} />
      <HashRouter>
        <Routes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
