import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'


class BountyEditForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      "targetName": props.bounty.targetName,
      "reward": props.bounty.reward,
      "imagePath": props.bounty.imagePath,
      "customer": props.bounty.customer
    }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(event){
  event.preventDefault();
  const bounty = this.state
  this.props.handleBountyPatch(bounty);
}

render(){


    const options = this.props.customers._embedded.customers.map((customer, idx) => <option value = {customer._links.self.href}>{customer.name} </option>)
    return(
        <Container>
          <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                  <Form.Group as={Col} lg="6" controlId="targetName">
                    <Form.Label>Target Name</Form.Label>
                    <Form.Control required type="text" value={this.state.targetName} onChange={e => this.setState({targetName: e.target.value})}/>
                  </Form.Group>
                  <Form.Group as={Col} lg="6" controlId="reward">
                    <Form.Label>Reward :</Form.Label>
                    <Form.Control required type="number" value={this.state.reward} onChange={e => this.setState({reward: e.target.value})}/>
                  </Form.Group>
              </Form.Row>
              <Form.Group controlId="image" >
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" value={this.state.imagePath} onChange={e => this.setState({imagePath: e.target.value})}/>
              </Form.Group>

              <Form.Group controlId="customer">
                <Form.Label>Customers</Form.Label>
                <Form.Control required as="select" value={this.state.customer} onChange={e => this.setState({customer: e.target.value})}>
                  {options}
                  </Form.Control>
              </Form.Group>


              <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Container>
        )
  }
}




export default BountyEditForm;
