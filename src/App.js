import React, { Component } from 'react';
import './App.css';

import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SANDBOX HEADER</h1>
        </header>
        
        <div className='Dashboard'>
         {route}
        </div>
      </div>
    );
  }
}

export default App;
