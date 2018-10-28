import React, {Component} from 'react';
import 'tachyons/css/tachyons.css';
import './App.css';
import Routes from './Routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
