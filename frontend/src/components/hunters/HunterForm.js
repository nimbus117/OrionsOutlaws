import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'

const  HunterForm = props => {

  function handleSubmit(event){
    event.preventDefault();
    const hunter = {
      "name": event.target.name.value,
      "emailAdress": event.target.email.value,
      "wallet": event.target.wallet.value,
      "imagePath": event.target.image.value,
      "hunterStatus": event.target.status.value
    }
    props.handleHunterPost(hunter);
  }

  return(
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="wallet">
          <Form.Label>Wallet</Form.Label>
          <Form.Control type="number" placeholder="Enter amount" />
        </Form.Group>
        <Form.Group as={Col} controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select">
            <option value="ALIVE">Alive</option>
            <option value="DEAD">Dead</option>
            <option value="RETIRED">Retired</option>
            <option value="MISSING">Missing</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter path" />
      </Form.Group>
      <Form.Group id="sendWelcome">
        <Form.Check type="checkbox" label="Send welcome email" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </Container>
  )
}

export default HunterForm;
