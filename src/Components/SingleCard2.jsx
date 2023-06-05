import React from 'react'
import { Col } from 'react-bootstrap'

const SingleCard2 = ({img,title,desc}) => {
  return (
   <Col sm={12} md={3} className='d-flex flex-column justify-content-center align-items-center'>
    <img src={img} alt="" width={53} height={53} />
    <p className='fw-semibold mt-2'>{title}</p>
    <span className='text-secondary'>{desc}</span>
   </Col>
  )
}

export default SingleCard2