import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
   <div className='contact py-3'>
    <Container fluid>
        <Row>
            <Col sm={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38871.64223672308!2d-1.884737!3d52.488593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sus!4v1676325746688!5m2!1sen!2sus" width="1325" height="550" title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
    </Container>
    <Container className='my-5'>
    <h2>Looking for our local store?</h2>
        <Row className='my-5'>
            <Col sm={12} md={4}>
                <h6>Address 1</h6>
                <p className='mt-4'>One Chase Manhattan Plaza <br /> New York, NY 10005, USA</p>
                <p className='text-danger'>+1 554 883 2032</p>
                <hr className='w-25'/>
                <span>Monday – Friday: 9:00 – 20:00</span><br />
                <span>Saturady: 11:00 – 15:00</span>
            </Col>
            <Col sm={12} md={4}>
                <h6>Address 2</h6>
                <p className='mt-4'>2972 Westheimer Rd. Santa <br /> Ana, Illinois 85486 </p>
                <p className='text-danger'>(406) 555-0120</p>
                <hr className='w-25'/>
                <span>Monday – Friday: 9:00 – 20:00</span><br />
                <span>Saturady: 11:00 – 15:00</span>
            </Col>
            <Col sm={12} md={4}>
                <h6>Address 3</h6>
                <p className='mt-4'>1901 Thornridge Cir. Shiloh,<br /> Hawaii 81063 </p>
                <p className='text-danger'>(480) 555-0103</p>
                <hr className='w-25'/>
                <span>Monday – Friday: 9:00 – 20:00</span><br />
                <span>Saturady: 11:00 – 15:00</span>
            </Col>
        </Row>
    </Container>
   </div>
  )
}

export default Contact