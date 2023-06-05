
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard1 from '../Components/SingleCard1'
import SingleCard2 from '../Components/SingleCard2'
import feature from '../Data/feature'
import rooms from '../Data/room'

const Home = () => {
  
  return (
    <div className='hero'>
        <Container fluid >
            <Row className='g-3'>
                    {rooms.map((fd)=>(
                        <SingleCard1 key={fd.id} img={fd.img} button={fd.button}/>
                    ))}
            </Row>
        </Container>
        <Container className='my-5'>
            <Row>
                {feature.map((fd)=>(
                    <SingleCard2 key={fd.id} img={fd.img} title={fd.title} desc={fd.desc}/>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default Home