import React, {Component} from 'react';
import Header from '../../components/header.js';
import CustomerForm from '../../components/customers/CustomerForm';
import Request from '../../helpers/request.js';

class CustomersFormContainer extends Component {

  constructor(props) {
    super(props);
    this.handleCustomerPost = this.handleCustomerPost.bind(this);
  }

  handleCustomerPost(payload) {
    const request = new Request();
    const url = '/api/customers/';
    request.post(url, payload)
      .then(() => {
        window.location = '/customers';
      })
  }

  render() {
    return(
      <div>
        <Header title="New Customer" />
        <CustomerForm handleCustomerPost={this.handleCustomerPost} />
      </div>
    )
  }
}

export default CustomersFormContainer;
