import React from 'react'
import {Carousel} from 'react-bootstrap'
import intern from './intern.png'
import fresher from './fresher.webp'
import job from './job.jpg'


function Home(){
    return(
        <div>
             <h1 className="pt-2 text-center text-secondary" >Welcome to the Career Finder app</h1>
             <div className='carousel'>
                <Carousel className="ml-4 mr-4">
                    {/* <Carousel.Item>
                    <div className="d-block justify-content-center">
                            <img className="rounded"
                                src={intern}
                                alt="first slide"
                                width='100%'
                                height='400'
                            />
                        </div>
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    <Carousel.Item>
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
                        {/* <Carousel.Caption>
                            <h3 style={{color:'black',fontSize:'24px'}}><b>Kumar</b></h3>
                            <p style={{color:'black',fontSize:'24px'}}><b>“Trust yourself, you know more than you think you do”</b></p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <div className="d-block justify-content-center">
                            <img className="rounded"
                                src={job}
                                alt="Third slide"
                                width='100%'
                                height='400'
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 style={{color:'black',fontSize:'24px'}}><b>Chaurasia</b></h3>
                            <p style={{color:'black',fontSize:'24px'}}><b>“Don’t say you don’t have enough time. You have exactly the same amount of hours per day that were given to…</b></p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </div>
        </div>
    )
}

export default Home