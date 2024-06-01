import React from 'react'
import {Container,Row, Col, Image} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    <div>
        <Container fluid>
            <Row className='justify-content-center aligns-items-center my-3 py-3'>
                <Col lg={8} >
                    <Carousel>

                        <Carousel.Item interval={2000}>
                            <img
                            className='d-block w-100'
                            src={require("../assets/one.jpeg")}
                            alt=''
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p className='d-none d-sm-block'>Pizza is the one thing that I will never get tired of.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            {/* <ExampleCarouselImage text="Second slide" /> */}
                            {/* <Image src={require("../assets/two.jpg")}/> */}
                            <img
                            className='d-block w-100 h-50'
                            src={require("../assets/two.jpeg")}
                            alt=''
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p className='d-none d-sm-block'>I want someone to look at me the same way I look at pizza.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img
                                className='d-block w-100'
                                src={require("../assets/three.jpeg")}
                                alt=''
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p className='text-bg-black, d-none d-sm-block'>Pizza is not a trend, it's a way of life.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Col>
            </Row>
            <h2 className='display-5 mt-3'>Pizzas for Every Occasion!</h2>
            <p className='lead text-muted'>HIIIIIIIIIIIIIIIIIII</p>





        </Container>
    </div>
  )
}

export default Banner