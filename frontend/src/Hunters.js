import React, {Component} from 'react';
import Request from './request'
import Hunter from './Hunter'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

class Hunters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hunters: []
    };
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/hunters')
      .then(hunters => this.setState({hunters: hunters._embedded.hunters}));
  }

  render() {
    const hunters = this.state.hunters.map((hunter, idx) => <Hunter data={hunter} key={idx} />)
    return(
      <div>
        <Jumbotron>
          <h1>Hunters</h1>
          <p>Orion's Outlaws managment system. Authorized access only!</p>
        </Jumbotron>
        <Container>
          <Row>
            {hunters}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Hunters;
