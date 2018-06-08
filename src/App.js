import React, { Component } from 'react';
import './App.css';

import Dashboard from './Component/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SANDBOX HEADER</h1>
        </header>
        <body>
         <Dashboard />
       </body>
      </div>
    );
  }
}

export default App;
