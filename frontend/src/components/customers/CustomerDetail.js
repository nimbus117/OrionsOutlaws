import React from 'react'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Image from'react-bootstrap/lib/Image'
import Col from 'react-bootstrap/lib/Col'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import Header from '../header';

const CustomerDetail = (props) => {
  const path = props.data.imagePath
  const image = path ? path : "https://dummyimage.com/400x400/000/fff.png&text=No Image"
  return(
    <div>
      <Header title={`Customer: ${props.data.name}`} />
      <Container>
        <Row>
          <Col md={4}>
          </Col>
          <Col md={7}>
            <ListGroup variant="flush">
              <ListGroup.Item>Email Address: {props.data.emailAddress}</ListGroup.Item>
              <ListGroup.Item>Account: £{props.data.account}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CustomerDetail;
