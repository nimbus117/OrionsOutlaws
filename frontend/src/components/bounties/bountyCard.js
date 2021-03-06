import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'

const BountyCard = (props) => {

  const onDelete = () => {
    props.handleDelete(props.data.id);
  }

  const onPatch = () => {
    props.handleBountyPatch({completed: true}, props.data.id);
  }

  const path = props.data.imagePath
  const image = path ? path : "https://dummyimage.com/400x400/000/fff.png&text=No Image"
  return(
    <Col md={6} xl={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{props.data.targetName}</Card.Title>
          <ul>
            <li>Reward: £{props.data.reward}</li>
            <li>Completed: {props.data.completed.toString()}</li>
            <li>Customers: {props.data.customer.name}</li>
          </ul>
          <ButtonGroup aria-label="Bounty options">
            <Button variant="outline-dark" href = {`/bounties/details/${props.data.id}`}>View</Button>
            <Button variant="outline-dark" href = {`/bounties/edit/${props.data.id}`} >Edit</Button>
            <Button variant="outline-danger" onClick={onDelete} >Delete</Button>
            <Button disabled={props.data.completed} variant="outline-success" onClick={onPatch} >Complete</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BountyCard;
