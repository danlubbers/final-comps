import React, { Component } from 'react';
import './App.css';

import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* ID 55C */}
        <header className="App-header">
          <h1>SANDBOX HEADER</h1>
        </header>
        
        <dashboard className='Dashboard'>
         {route}
        </dashboard>
      </div>
    );
  }
}

export default App;
