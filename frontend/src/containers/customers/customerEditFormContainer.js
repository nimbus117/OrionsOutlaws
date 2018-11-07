import React, {Component} from 'react';
import Header from '../../components/header.js';
import CustomerEditForm from '../../components/customers/CustomerEditForm';
import Request from '../../helpers/request.js';

class CustomersEditFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
    this.handleCustomerPatch = this.handleCustomerPatch.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/customers/' + this.props.match.params.id)
      .then(customer => this.setState({customer: customer}));
  }

  handleCustomerPatch(payload) {
    const request = new Request();
    const url = '/api/customers/' + this.props.match.params.id;
    request.patch(url, payload)
      .then(() => {
        window.location = '/customers/details/' + this.props.match.params.id;
      })
  }

  render() {
    if(!this.state.customer) { return null }
    return(
      <div>
        <Header title={"Edit Customer: " + this.state.customer.name} />
      <CustomerEditForm customer={this.state.customer} handleCustomerPatch={this.handleCustomerPatch} />
      </div>
    )
  }
}

export default CustomersEditFormContainer;
