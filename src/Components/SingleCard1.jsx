import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const SingleCard1 = ({img,button}) => {

  useEffect(()=>{
    AOS.init()
},[])

  return (
   <Col data-aos="zoom-in-up"
   data-aos-duration="1000" sm={12} md={3}>
    <img src={img}  alt="" width={312} height={439} />
    <Button variant="light">{button}</Button>
   </Col>
  )
}

export default SingleCard1