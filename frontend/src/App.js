import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './containers/home'
import HuntersListContainer from './containers/hunters/huntersListContainer'
import HuntersSingleContainer from './containers/hunters/huntersSingleContainer'
import HuntersFormContainer from './containers/hunters/hunterFormContainer'
import ScrollToTop from 'react-scroll-up'


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/hunters" component={HuntersListContainer} />
          <Route exact path="/hunters/new" component={HuntersFormContainer}/>
          <Route exact path="/hunters/details/:id" component={HuntersSingleContainer} />
          <ScrollToTop showUnder={160}>
            <span>TOP</span>
          </ScrollToTop>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
