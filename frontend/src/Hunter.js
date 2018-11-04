import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'

const Hunter = props => {
  console.log(props.data)
  const path = props.data.imagePath
  const image = path ? path : "https://dummyimage.com/400x400/000/fff.png&text=No Image" 
  return(
    <Col md={6} xl={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <ul>
            <li>Email: {props.data.emailAdress}</li>
            <li>Wallet: {props.data.wallet}</li>
            <li>Alive: {props.data.alive ? "true" : "false"}</li>
          </ul>
          <ButtonGroup aria-label="Hunter options">
            <Button variant="outline-dark">View</Button>
            <Button variant="outline-dark">Edit</Button>
            <Button variant="outline-danger">Delete</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Hunter;
