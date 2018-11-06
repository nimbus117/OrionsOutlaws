import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'

const CustomerCrad = props => {

  const onDelete = () => {
    props.handleDelete(props.data.id);
  }

  return(
    <Col md={6} xl={4}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <ul>
            <li>Email: {props.data.emailAddress}</li>
            <li>Wallet: £{props.data.account}</li>
          </ul>
          <ButtonGroup aria-label="Hunter options">
            <Button variant="outline-dark" href = {`/customers/details/${props.data.id}`}>View</Button>
            <Button variant="outline-dark">Edit</Button>
            <Button variant="outline-danger" onClick={onDelete}>Delete</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CustomerCrad;
