import React, {Component} from 'react';
import Header from '../../components/header';
import Request from '../../helpers/request'
import CustomerCard from '../../components/customers/CustomerCard'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'

class CustomersListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/customers')
      .then(customers => this.setState({customers: customers._embedded.customers}));
  }

  handleDelete(id) {
    const request = new Request();
    const url = '/api/customers/' + id;
    console.log(url);
    request.delete(url)
      .then(() => {
        window.location = '/customers';
      })
  }

  render() {
    const customers = this.state.customers.map((hunter, idx) => {
      return <CustomerCard data={hunter} key={idx} handleDelete={this.handleDelete}/>
    })
    return(
      <div>
        <Header title="Customers" />
        <Container>
          <Row>
            {customers}
          </Row>
        </Container>
      </div>
    )
  }
}
export default CustomersListContainer;
