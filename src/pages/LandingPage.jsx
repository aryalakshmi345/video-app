import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
   const navigateUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Wecome to <sapn className="text-warning">Media Player</sapn></h3>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat consequuntur explicabo natus ipsum sequi voluptate. Possimus quas ullam debitis vel tempore minima esse ut consectetur necessitatibus optio, temporibus laudantium?</p>
          <button onClick={()=>navigateUrl('/home')} className='mt-5 btn btn-primary'>Get Started  <i class="fa-solid fa-arrow-right fa-beat"></i></button>
        </Col>
        <Col lg={5}>
          <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="d-flex align-items-center justify-content-between w-100 mt-5 mb-5">
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} style={{height: '400px'}} variant="top" src="https://media.giphy.com/media/3gIPV5Ug4gKZavnsrg/giphy.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} style={{height:'400px'}} variant="top" src="https://i.pinimg.com/originals/63/4a/ea/634aeafde3993421dbdf337d49f425dc.gif" />
            <Card.Body>
              <Card.Title>Category Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img width={'300px'} style={{height: '400px'}} variant="top" src="https://i.pinimg.com/originals/5c/4a/1c/5c4a1cef8a1ebd3584fac99c817b173c.gif" />
            <Card.Body>
              <Card.Title>Managing History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="container border rounded border-secondary p-5 b-5 mt-5 d-flex align-items-center justify-content-between w-100 mb-5">
            <div className="content col-lg-5">
              <h4 className="mb-3 text-warning">simple, Fast and Powerful</h4>
              <h6 className='mb-3'><span className='fs-5 '>Play Everything </span>
              : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit natus laudantium, inventore excepturi corrupti, veritatis repudiandae </h6>
              <h6 className='mb-3'><span className='fs-5 '>Category Videos </span>
              : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit natus laudantium, inventore excepturi corrupti, veritatis repudiandae </h6>
              <h6 className='mb-3'><span className='fs-5 '>Managing History</span>
              : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit natus laudantium, inventore excepturi corrupti, veritatis repudiandae </h6>
            </div>
            <div className="video col-lg-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=buuR74InJ3UGyw-d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default LandingPage