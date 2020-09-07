import React from 'react'
import {Carousel, Row, Col, Image, Container} from 'react-bootstrap'
import fresher from './fresher.webp'
import bangalore from './bangalore.svg'
import delhi_ncr from './delhi_ncr.svg'
import international from './international.svg'
import mumbai from './mumbai.svg'
import patna from './patna.svg'
import work_from_home from './work_from_home.svg'








function Home(){
    return(
        <div>
             <h1 className="pt-2 text-center text-secondary" >Welcome to the Career Finder app</h1>
             <div className='carousel'>
                <Carousel>
                    <Carousel.Item className="pl-4 pr-4">
                    <Carousel.Caption className="text-left">
                            <h1 className="text-light text-left mt-0"><b>Career Finder App</b></h1>
                            <h4 className="text-light text-left mt-3"><b>Introducing</b></h4>
                            <h1 className="text-light text-left mt-0"><b>Fresher Jobs</b></h1>
                            <h4 className="text-light text-left mt-3"><b>Apply to premium fresher jobs for free</b></h4>
                            <h4 className="text-light text-left mt-3">Minimum CTC 3 LPA</h4>
                            <h4 className="text-light text-left mt-3">100% Verified Jobs</h4>
                            <p style={{color:'black',fontSize:'24px'}}><b>“Trust yourself, you know more than you think you do”</b></p>
                        </Carousel.Caption>
                    <div className="d-block justify-content-center">
                            <img className="rounded"
                                src={fresher}
                                alt="Second slide"
                                width='100%'
                                height='400'
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container className="mt-4 mb-5">
                <h4><b>Popular cities</b></h4>
             <Row className>
                <Col xs={6} md={4} className="d-block justify-content-center">
                <Image src={work_from_home} width='80%' height='100px' />
                <p>Work from home</p>
                </Col>
                <Col xs={6} md={4}>
                <Image src={patna} width='75%' height='100px' />
                </Col>
                <Col xs={6} md={4}>
                <Image src={delhi_ncr}  width='60%' height='100px' />
                </Col>
            </Row> 
            </Container>
        </div>
    )
}

export default Home