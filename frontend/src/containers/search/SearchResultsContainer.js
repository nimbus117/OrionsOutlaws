import React from 'react';
import Request from '../../helpers/request';
import Header from '../../components/header';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import HunterCard from '../../components/hunters/hunterCard';
import BountyCard from '../../components/bounties/bountyCard';
import CustomerCard from '../../components/customers/CustomerCard';

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounties: [],
      customers: [],
      hunters: []
    };
    this.handleBountyDelete = this.handleBountyDelete.bind(this);
    this.handleHunterDelete = this.handleHunterDelete.bind(this);
    this.handleCustomerDelete = this.handleCustomerDelete.bind(this);
  }

  handleBountyDelete(id) {
    const request = new Request();
    const url = '/api/bounties/' + id;
    console.log(url);
    request.delete(url)
      .then(() => {
        window.location = '/searchResults/' + this.props.data;
      })
  }

  handleHunterDelete(id) {
    const request = new Request();
    const url = '/api/hunters/' + id;
    console.log(url);
    request.delete(url)
      .then(() => {
        window.location = '/searchResults/' + this.props.data;
      })
  }

  handleCustomerDelete(id) {
    const request = new Request();
    const url = '/api/customers/' + id;
    console.log(url);
    request.delete(url)
      .then(() => {
        window.location = '/searchResults/' + this.props.data;
      })
  }

  componentDidMount() {
    const bountiesRequest = new Request();
    const bountiesUrl = '/bounties/search/' + this.props.data;
    bountiesRequest.get(bountiesUrl)
      .then( bounties => {
        this.setState({bounties: bounties})
        const huntersRequest = new Request();
        const huntersUrl = '/hunters/search/' + this.props.data;
        huntersRequest.get(huntersUrl)
          .then( hunters => {
            this.setState({hunters: hunters})
            const customersRequest = new Request();
            const customersUrl = '/customers/search/' + this.props.data;
            customersRequest.get(customersUrl)
              .then( customers => {
                this.setState({customers: customers})
              })
              .catch( this.setState({customers: []}))
          })
          .catch( this.setState({hunters: []}))
      })
      .catch( this.setState({bounties: []}))
  }

  render() {
    if ( this.state.bounties.length > 0 || this.state.hunters.length > 0 || this.state.customers.length > 0) {
      const hunters = this.state.hunters.map((hunter, idx) => {
        return <HunterCard data={hunter} key={idx} handleDelete={this.handleHunterDelete}/>
      })
      const bounties = this.state.bounties.map((bounty, idx) => {
        return <BountyCard data={bounty} key={idx} handleDelete={this.handleBountyDelete}/>
      })
      const customers = this.state.customers.map((customer, idx) => {
        return <CustomerCard data={customer} key={idx} handleDelete={this.handleCustomerDelete}/>
      })
      return(
        <div>
          <Header title="Search Results" />
          <Container>
            <Row>
              {hunters}
            </Row>
            <Row>
              {bounties}
            </Row>
            <Row>
              {customers}
            </Row>
          </Container>
        </div>
      )
    }
    return (
      <div>
        <Header title="Search Results" />
        <Container>
          <Row>
            <h2>There were no results found.</h2>
          </Row>
          <Row>
            <h3>Suggestion: The search is case sensitive, make sure you capitalize your search term.</h3>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SearchResultsContainer;
