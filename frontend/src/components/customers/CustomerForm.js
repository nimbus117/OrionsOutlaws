import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'

const  CustomerForm = props => {

  function handleSubmit(event){
    event.preventDefault();
    const customer = {
      "name": event.target.name.value,
      "emailAddress": event.target.email.value,
      "account": event.target.account.value
    }
    props.handleCustomerPost(customer);
  }

  return(
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} lg="6" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group as={Col} lg="6" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} lg="6" controlId="account">
          <Form.Label>Wallet</Form.Label>
          <Form.Control required type="number" placeholder="Enter amount" />
        </Form.Group>
      </Form.Row>
      <Form.Group id="sendWelcome">
        <Form.Check type="checkbox" label="Send welcome email" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </Container>
  )
}

export default CustomerForm;
