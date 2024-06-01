import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const PickoftheDay = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <section id="musttry" className="my-3">
        <div className="text-center display-5 text-primary my-5 py-3">
          <i className="bi bi-search-heart"></i>
          Pick of the Day
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <Image src={require("../assets/center.jpeg")} fluid={true} alt="pizza" />
            </Col>
            <Col md={5}>
              <h2 className="h1 my-3">Double Cheese Fajitha</h2>
              <p className="lead text-muted" style={{ textAlign: "justify" }}>
                Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomato, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.
              </p>
              <Button variant="secondary" onClick={() => setShow(true)}>Buy now</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <ToastContainer className="position-fixed p-3 top-0 end-0" position="top-end" style={{ zIndex: 1 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header closeButton={false}>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default PickoftheDay;
