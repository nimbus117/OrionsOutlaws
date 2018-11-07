import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'

class CustomerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "name": props.customer.name,
      "emailAddress": props.customer.emailAddress,
      "account": props.customer.account.toString()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const customer = this.state
    this.props.handleCustomerPatch(customer);
  }
  render() {
    return(
      <Container>
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} lg="6" controlId="name">
            <Form.Label>Name</Form.Label>
      <Form.Control required type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
          </Form.Group>
          <Form.Group as={Col} lg="6" controlId="email">
            <Form.Label>Email address</Form.Label>
      <Form.Control required type="email" value={this.state.emailAddress} onChange={e => this.setState({emailAddress: e.target.value})}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} lg="6" controlId="account">
            <Form.Label>Account</Form.Label>
      <Form.Control required type="number" value={this.state.account} onChange={e => this.setState({account: e.target.value})}/>
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      </Container>
    )
  }
}

export default CustomerForm;
