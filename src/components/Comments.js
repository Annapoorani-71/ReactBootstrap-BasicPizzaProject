import React from 'react'
import { Col, Container, FloatingLabel, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Comments = () => {
  return (
    <div>
        <section id="contactus">
        <div className="text-center display-5 text-primary my-5 py-3">
          <i className="bi bi-search-heart"></i>
          Comments
        </div>
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i class="bi bi-balloon-heart-fill"></i></InputGroup.Text>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i class="bi bi-balloon-heart-fill"></i></InputGroup.Text>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </InputGroup>

                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Comments"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>



                    
                    </Form>
                </Col>
            </Row>
        </Container>

        </section>
    </div>
  )
}

export default Comments