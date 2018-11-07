import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'

const BountyForm = props =>{

  function handleSubmit(event){
    event.preventDefault();
    const bounty = {
      "targetName": event.target.targetName.value,
      "reward": event.target.reward.value,
      "imagePath": event.target.image.value,
      "customer": event.target.customers.value

    }
    props.handleBountyPost(bounty);
  }

  const customerOptions = props.customers.map((customer, idx)=> {
    return <option value={customer._links.self.href}>{customer.name}</option>
  })

  return(
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} lg="6" controlId="targetName">
          <Form.Label>Target Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter Target name" />
        </Form.Group>
        <Form.Group as={Col} lg="6" controlId="reward">
          <Form.Label>Reward :</Form.Label>
          <Form.Control required type="number" placeholder="Enter Reward Value" />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter path" />
      </Form.Group>
      <Form.Group controlId="customers">
      <Form.Label>Customers</Form.Label>
      <Form.Control required as="select">
      {customerOptions}
      </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </Container>
  )
}


export default BountyForm;
