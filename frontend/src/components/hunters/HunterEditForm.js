import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'

class HunterEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hunter: {
        "name": props.hunter.name,
        "emailAdress": props.hunter.emailAdress,
        "wallet": props.hunter.wallet.toString(),
        "imagePath": props.hunter.imagePath,
        "hunterStatus": props.hunter.hunterStatus
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleHunterPatch(this.state.hunter);
  }
  render() {
      const statuses = ["ALIVE", "DEAD", "RETIRED", "MISSING"]
      const options = statuses.map((status, idx) => <option value={status}>{status}</option>)
      return(
        <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} lg="6" controlId="name">
              <Form.Label>Name</Form.Label>
        <Form.Control required type="text" value={this.state.hunter.name} onChange={e => this.setState({hunter: {name: e.target.value}})}/>
            </Form.Group>
            <Form.Group as={Col} lg="6" controlId="email">
              <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" value={this.state.hunter.emailAdress} onChange={e => this.setState({hunter: {emailAdress: e.target.value}})}/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} lg="6" controlId="wallet">
              <Form.Label>Wallet</Form.Label>
              <Form.Control required type="number" value={this.state.hunter.wallet} onChange={e => this.setState({hunter: {wallet: e.target.value}})}/>
            </Form.Group>
            <Form.Group as={Col} lg="6" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control required as="select" value={this.state.hunter.hunterStatus.toUpperCase()}  onChange={e => this.setState({hunter: {hunterStatus: e.target.value}})}>
                {options}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" value={this.state.hunter.imagePath} onChange={e => this.setState({hunter: {image: e.target.value}})}/>
          </Form.Group>
          <Form.Group id="sendWelcome">
            <Form.Check type="checkbox" label="Send welcome email" />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </Container>
      )
  }
}

export default HunterEditForm;
