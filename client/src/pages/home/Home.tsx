import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import Form from './../../components/Form/Form'
import Item from './../../components/Item/Item'
import Chat from './../../components/Chat/Chat'

const Home = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col lg="8">
          <h4>Danh sách</h4>
          <Row>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Row>
        </Col>
          <Col lg="4">
            <Form />
          </Col>
      </Row>

      <Chat />
    </Container>
  )
}

export default Home