import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Image from 'react-bootstrap/lib/Image'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'

const AssignmentCard = (props) => {

  const onDelete = () => {
    props.handleDelete(props.data.id);
  }

  const bountyPath = props.data.bounty.imagePath
  const bountyImage = bountyPath ? bountyPath : "https://dummyimage.com/400x400/000/fff.png&text=No Image"

  const hunterPath = props.data.hunter.imagePath
  const hunterImage = hunterPath ? hunterPath : "https://dummyimage.com/400x400/000/fff.png&text=No Image"

  return(
    <Col md={6}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>

          <Row>
            <Col md={4} className="align-items-stretch"> <a href = {"/bounties/details/"+ props.data.bounty.id}><Image fluid src={bountyImage}/></a></Col>
          <Col md={4} className="align-items-stretch">
              <p className="text-center">Date Assigned</p>
              <p className="text-center">{props.data.dateAssigned}</p>
          </Col>
            <Col md={4} className="align-items-stretch"><a href = {"/hunters/details/"+ props.data.hunter.id}><Image fluid src={hunterImage}/></a></Col>
          </Row>
          <ButtonGroup  aria-label="Assignment options">
            <Button className="mt-4"  variant="outline-danger" onClick={onDelete}>Delete</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AssignmentCard;
