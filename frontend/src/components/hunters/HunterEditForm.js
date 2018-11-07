import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
import Col from 'react-bootstrap/lib/Col'

class HunterEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        "name": props.hunter.name,
        "emailAdress": props.hunter.emailAdress,
        "wallet": props.hunter.wallet.toString(),
        "imagePath": props.hunter.imagePath,
        "hunterStatus": props.hunter.hunterStatus
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const hunter = this.state
    this.props.handleHunterPatch(hunter);
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
        <Form.Control required type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
            </Form.Group>
            <Form.Group as={Col} lg="6" controlId="email">
              <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" value={this.state.emailAdress} onChange={e => this.setState({emailAdress: e.target.value})}/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} lg="6" controlId="wallet">
              <Form.Label>Wallet</Form.Label>
              <Form.Control required type="number" value={this.state.wallet} onChange={e => this.setState({wallet: e.target.value})}/>
            </Form.Group>

            <Form.Group as={Col} lg="6" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control required as="select" value={this.state.hunterStatus}  onChange={e => this.setState({hunterStatus: e.target.value})}>
                {options}
              </Form.Control>
            </Form.Group>

          </Form.Row>
          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" value={this.state.imagePath} onChange={e => this.setState({image: e.target.value})}/>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </Container>
      )
  }
}

export default HunterEditForm;
