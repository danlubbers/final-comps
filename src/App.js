import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* 55C */}
        <header className="App-header">
        {/* 54-G */}
          <Header />
        </header>
        {/* 55D */}
        <div className='Dashboard'>
         {route}
        </div>

        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
