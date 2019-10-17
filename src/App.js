import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import MainTheme from './components/MainTheme';

class App extends Component {
  render() {
    return (
      <div className="MyPage container-fluid">
        <Navbar />
        <MainTheme />
      </div>
    );
  }
}

export default App;
