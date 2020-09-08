import React from 'react'
import {Carousel, Row, Col, Image, Container, CardDeck, Card} from 'react-bootstrap'
import fresher from './fresher.webp'
import bangalore from './bangalore.svg'
import delhi_ncr from './delhi_ncr.svg'
import international from './international.svg'
import mumbai from './mumbai.svg'
import patna from './patna.svg'
import work_from_home from './work_from_home.svg'
import ctc from './ctc.svg'
import dream from './dream.svg'
import verified from './verified.svg'
import manish from './manish.jpg'
import manish1 from './manish1.jpg'
import girl from './girl.svg'

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
             <Row className="ml-0">
                <Col xs={4} md={2} className="d-block text-center justify-content-center">
                <Image src={work_from_home} width='100%' height='100px' />
                <p>Work from home</p>
                </Col>
                <Col xs={4} md={2} className="d-block text-center justify-content-center">
                <Image src={patna} width='100%' height='100px' />
                <p>Patna</p>
                </Col>
                <Col xs={4} md={2} className="d-block text-center justify-content-center">
                <Image src={delhi_ncr}  width='100%' height='100px' />
                <p>Delhi</p>
                </Col>
                <Col xs={4} md={2} className="d-block text-center justify-content-center">
                <Image src={bangalore}  width='100%' height='100px' />
                <p>Bangalore</p>
                </Col>
                <Col xs={4} md={2} className="d-block text-center justify-content-center">
                <Image src={mumbai}  width='100%' height='100px' />
                <p>Mumbai</p>
                </Col>
                <Col xs={4} md={2} className="d-block text-center justify-content-center">
                <Image src={international}  width='100%' height='100px' />
                <p>International</p>
                </Col>
            </Row> 
            </Container>

            <Container className="mt-5 mb-5">
                <h1>Fresher Jobs</h1>
                <h5 className="text-secondary">Premium fresher jobs on your fingertips</h5>
                <Row>
                    <Col xs={12} md={5} className="d-block text-center justify-content-center">
                    <Image src={ctc} width='100%' height='100px' />
                    <p><b>Minimum CTC of 3 LPA</b></p>
                    </Col>
                    <Col xs={12} md={2} className="d-block text-center justify-content-center">
                    <Image src={dream} width='100%' height='100px' />
                    <p><b>Dream companies</b></p>
                    </Col>
                    <Col xs={12} md={5} className="d-block text-center justify-content-center">
                    <Image src={verified}  width='100%' height='100px' />
                    <p><b>100% verified jobs</b></p>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 mb-5">
                <h2 className="text-center mb-5"><b>Hear from past interns</b></h2>
                <CardDeck className="text-center">
                    <Card className="card" >
                    <Image style={{marginLeft: "125px", borderRadius: "100px"}} className="mt-4 " src={manish1} width='30%' height='105' />
                        <Card.Body>
                        <Card.Title>Prience Kumar</Card.Title>
                        <p>Content Writing intern, Urban Ladder </p>
                        <Card.Text className="text-justify">
                        My internship has equipped me with industry-level skills that a college doesn't
                        really teach you! I met some amazing people and worked on some really cool 
                        projects. I can't wait to learn more through this internship experience! My 
                        advice to students would be “be confident and have immense faith in yourself.” 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Image style={{marginLeft: "125px", borderRadius: "100px"}} className="mt-4 " src={manish} width='30%' height='105' />
                        <Card.Body>
                        <Card.Title>Manish Kumar</Card.Title>
                        <p>Teaching intern, Teach For India </p>
                        <Card.Text className="text-justify">
                        My 1st internship has given my knowledge a completely different direction. 
                        I learn new things daily & widen my horizons to meet my work as well as my 
                        academic requirements. I want to tell students that keep trying because getting 
                        selected or not is not in your hands, but trying is. So, just keep trying with 
                        the best of your abilities! 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                    <Image style={{marginLeft: "125px", borderRadius: "100px"}} className="mt-4 " src={girl} width='30%' height='105' />
                        <Card.Body>
                        <Card.Title>Taaj Uddin</Card.Title>
                        <p>Intern, E-cell ACET Amritsar </p>
                        <Card.Text>
                        My 1st internship experience has been amazing so far and to be honest, 
                        I am learning so much. I've learned how to work with different people, 
                        how to pitch something by doing research, and so much more. My advice to 
                        students would be to never lose hope! Rejections will be there, but believe 
                        in yourself and do your best in whatever you do! 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    )
}

export default Home