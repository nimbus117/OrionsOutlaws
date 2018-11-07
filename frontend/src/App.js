import React, { Component } from 'react';
import './App.css';
import Request from './helpers/request'
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
import ScrollToTop from 'react-scroll-up'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bounties: [],
      hunters: [],
      customers: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchString) {
    const bountiesRequest = new Request();
    const bountiesUrl = '/bounties/search/' + searchString;
    console.log(bountiesUrl);
    bountiesRequest.get(bountiesUrl)
      .then( bounties => this.setState({bounties: bounties}))
      .catch( this.setState({bounties: []}))
    const huntersRequest = new Request();
    const huntersUrl = '/hunters/search/' + searchString;
    console.log(huntersUrl);
    huntersRequest.get(huntersUrl)
      .then( hunters => this.setState({hunters: hunters}))
      .catch( this.setState({hunters: []}))
    const customersRequest = new Request();
    const customersUrl = '/customers/search/' + searchString;
    console.log(customersUrl);
    customersRequest.get(customersUrl)
      .then( customers => this.setState({customers: customers}))
      .catch( this.setState({customers: []}))
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar handleSearch={this.handleSearch}/>
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

          <ScrollToTop showUnder={160}>
            <span>TOP</span>
          </ScrollToTop>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
