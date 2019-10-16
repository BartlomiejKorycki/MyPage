import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="MyPage container-fluid">
        <Navbar />
      </div>
    );
  }
}

export default App;
