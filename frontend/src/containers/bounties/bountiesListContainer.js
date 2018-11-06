import React from 'react';
import Header from '../../components/header';
import Request from '../../helpers/request'
import BountyCard from '../../components/bounties/bountyCard'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'


class BountiesListContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bounties: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/bounties')
      .then(bounties => this.setState({bounties: bounties._embedded.bounties}));
  }

  handleDelete(id) {
    const request = new Request();
    const url = '/api/bounties/' + id;
    console.log(url);
    request.delete(url)
      .then(() => {
        window.location = '/bounties';
      })
  }

  render() {
    const bounties = this.state.bounties.map((bounty, idx) => {
      return <BountyCard data={bounty} key={idx} handleDelete={this.handleDelete}/>
    })
    return(
      <div>
        <Header title="Bounties" />
        <Container>
          <Row>
            {bounties}
          </Row>
        </Container>
      </div>
    )
  }
}

export default BountiesListContainer;
