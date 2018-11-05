import React, {Component} from 'react';
import Header from '../../components/header';
import Request from '../../helpers/request'
import HunterCard from '../../components/hunters/hunterCard'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'

class HuntersListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hunters: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/hunters')
      .then(hunters => this.setState({hunters: hunters._embedded.hunters}));
  }

  handleDelete(id) {
    const request = new Request();
    const url = '/api/hunters/' + id;
    console.log(url);
    request.delete(url)
      .then(() => {
        window.location = '/hunters';
      })
  }

  render() {
    const hunters = this.state.hunters.map((hunter, idx) => <HunterCard data={hunter} key={idx} handleDelete={this.handleDelete}/>)
    return(
      <div>
        <Header title="Hunters" />
        <Container>
          <Row>
            {hunters}
          </Row>
        </Container>
      </div>
    )
  }
}
export default HuntersListContainer;
