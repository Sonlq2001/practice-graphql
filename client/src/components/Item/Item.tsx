import React from 'react'
import {Col, Card} from 'react-bootstrap';

const Item = () => {
  return (
    <Col lg="3" className="mb-3">
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item