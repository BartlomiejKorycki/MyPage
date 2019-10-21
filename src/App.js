import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainTheme from './components/MainTheme';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="MyPage container-fluid">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={MainTheme}/>
            <Route path="/about" component={Aboutme} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
