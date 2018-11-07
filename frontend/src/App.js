import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './containers/home'
import HuntersListContainer from './containers/hunters/huntersListContainer'
import HuntersSingleContainer from './containers/hunters/huntersSingleContainer'
import HuntersFormContainer from './containers/hunters/hunterFormContainer'
import HuntersEditFormContainer from './containers/hunters/hunterEditFormContainer'
import BountiesListContainer from './containers/bounties/bountiesListContainer'
import BountiesFormContainer from './containers/bounties/bountiesFormContainer'
import BountiesEditFormContainer from './containers/bounties/bountiesEditFormContainer'
import BountiesSingleContainer from './containers/bounties/bountiesSingleContainer'
import CustomersListContainer from './containers/customers/customersListContainer'
import CustomersSingleContainer from './containers/customers/customersSingleContainer'
import CustomersFormContainer from './containers/customers/customersFormContainer'
import CustomersEditFormContainer from './containers/customers/customerEditFormContainer'

import SearchResultsContainer from './containers/search/SearchResultsContainer'

import AssignmentsListContainer from './containers/assignments/assignmentsListContainer'
import AssignmentsFormContainer from './containers/assignments/assignmentsFormContainer'

import ScrollToTop from 'react-scroll-up'

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(searchString) {
    window.location = '/searchResults/' + searchString;
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar handleSearchSubmit={this.handleSearchSubmit}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/hunters" component={HuntersListContainer} />
          <Route exact path="/hunters/new" component={HuntersFormContainer}/>
          <Route exact path="/hunters/details/:id" component={HuntersSingleContainer} />
          <Route exact path="/hunters/edit/:id" component={HuntersEditFormContainer} />
          <Route exact path="/customers" component={CustomersListContainer} />
          <Route exact path="/customers/new" component={CustomersFormContainer} />
          <Route exact path="/customers/details/:id" component={CustomersSingleContainer} />
          <Route exact path="/customers/edit/:id" component={CustomersEditFormContainer} />
          <Route exact path="/bounties" component={BountiesListContainer} />
          <Route exact path="/bounties/new" component={BountiesFormContainer}/>
          <Route exact path="/bounties/details/:id" component={BountiesSingleContainer} />
          <Route exact path="/bounties/edit/:id" component={BountiesEditFormContainer} />
<<<<<<< HEAD
          <Route exact path="/searchResults/:searchString" render= { (props) => {
            const data = props.match.params.searchString;
            return <SearchResultsContainer data={data} />
            }}
          />
=======
          <Route exact path="/assignments" component={AssignmentsListContainer} />
          <Route exact path="/assignments/new" component={AssignmentsFormContainer}/>
>>>>>>> develop
          <ScrollToTop showUnder={160}>
            <span>TOP</span>
          </ScrollToTop>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
