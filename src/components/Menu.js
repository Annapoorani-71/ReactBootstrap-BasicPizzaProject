import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PizzaCard from './PizzaCard'
const Menu = () => {
    const [menu] = useState([1,2,3,4,5,6])
  return (
    <div>
        <section id='menu'>
            <Container>
                <h5 className='text-primary my-3 py-3'>Treat Yourself with our Everyday Menu <i class="bi bi-music-note"></i></h5>
            </Container>
            <Row>
                {
                    menu.map((item)=>{
                        return(
                            <Col md={6} lg={4} key={item}> {/*  total=12 so 6...two card */}
                                <PizzaCard/>

                            </Col>
                    )
                    })
                }
                 
            </Row>
        </section>
    </div>
  )
}

export default Menu