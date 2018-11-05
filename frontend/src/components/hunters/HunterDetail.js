import React from 'react'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Image from'react-bootstrap/lib/Image'
import Col from 'react-bootstrap/lib/Col'
import ListGroup from 'react-bootstrap/lib/ListGroup'

const HunterDetail = (props) => {
  return(
    <div>
      <Jumbotron>
        <h1>Hunter: {props.data.name}</h1>
        <p>Orion's Outlaws management system. Authorized access only!</p>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={4}>
            <Image src={props.data.imagePath} fluid/>
          </Col>
          <Col md={7}>
            <ListGroup variant="flush">
              <ListGroup.Item>Email Address:{props.data.emailAdress}</ListGroup.Item>
              <ListGroup.Item>Wallet:{props.data.wallet}</ListGroup.Item>
              <ListGroup.Item>Current Status: {props.data.hunterStatus.toString().toLowerCase()}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HunterDetail;
