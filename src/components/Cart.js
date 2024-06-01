import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';

const Cart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
          <>
          <div className="position-relative d-inline-block">
                    <Button onClick={handleShow} className="me-2" variant="light">
                        <i className="bi bi-cart4"></i>
                    </Button>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        3+
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Lists</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <Orders/>
           <div className='text-end my-3'>
           <Button className='primary'>Check out</Button>
           </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </div>
  )
}

export default Cart