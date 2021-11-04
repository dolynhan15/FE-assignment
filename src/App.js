import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Direction from './direction/Direction';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Direction/>
      </BrowserRouter>
    );
  }
}

export default App;