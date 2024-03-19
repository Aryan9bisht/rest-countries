import React, { Component } from 'react';
import Countries from './components/Countries';
import { DarkModeProvider  } from './components/DarkModeContext';
import './App.css';

class App extends Component {
  render() {
    return (
      <DarkModeProvider>
      <div className="App" >
   
    <Countries />
      </div>
      </DarkModeProvider>
    );
  }
}

export default App;
