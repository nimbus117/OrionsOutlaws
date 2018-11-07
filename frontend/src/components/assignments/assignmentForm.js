import React from 'react';
import Form from 'react-bootstrap/lib/Form'
import Button from 'react-bootstrap/lib/Button'
import Container from 'react-bootstrap/lib/Container'
//import Col from 'react-bootstrap/lib/Col'

const AssignmentForm = props => {

  function handleSubmit(event){
    event.preventDefault();
    const assignment = {
      "bounty": event.target.bounty.value,
      "hunter": event.target.hunter.value,
      "dateAssigned": new Date().toString().substr(4,11)
    }
    props.handleAssignmentPost(assignment);
  }


  const bountyOptions = props.bounties._embedded.bounties.map((bounty, idx)=> {
    return <option value={bounty._links.self.href}>{bounty.targetName}</option>
  })

  const hunterOptions = props.hunters._embedded.hunters.map((hunter, idx) => {
    return <option value={hunter._links.self.href}>{hunter.name}</option>

  })


  return(
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="bounty">
        <Form.Label>Select Bounty</Form.Label>
          <Form.Control required as="select">
            {bountyOptions}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="hunter">
          <Form.Label>Assign Hunter</Form.Label>
            <Form.Control required as="select">
              {hunterOptions}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default AssignmentForm;
