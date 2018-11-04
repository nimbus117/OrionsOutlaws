import React, { Component } from 'react';
import NavBar from './NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home'
import Hunters from './Hunters'
import ScrollToTop from 'react-scroll-up'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/hunters" component={Hunters} />
          <ScrollToTop showUnder={160}>
            <span>TOP</span>
          </ScrollToTop>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
