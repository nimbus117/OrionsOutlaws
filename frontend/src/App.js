import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './containers/home'
// import Hunters from './Hunters'
import ScrollToTop from 'react-scroll-up'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <ScrollToTop showUnder={160}>
            <span>TOP</span>
          </ScrollToTop>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
