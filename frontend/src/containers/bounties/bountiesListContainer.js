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
  }

    componentDidMount() {
      const request = new Request();
      request.get('/api/bounties')
        .then(bounties => this.setState({bounties: bounties._embedded.bounties}));
    }

    render() {
      const bounties = this.state.bounties.map((bounty, idx) => <BountyCard data={bounty} key={idx}/>)
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
