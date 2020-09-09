import React, {useState} from 'react'
import { connect } from 'react-redux'
import moment from 'moment';
import { Container, Card, Button, Nav, Row, Col, FormControl, InputGroup} from 'react-bootstrap'
import { FaRupeeSign, FaMapMarkerAlt } from "react-icons/fa"

function Internship(props) {

    const displayInternship = props.internship
    // console.log("displayCompany", displayCompany)

    const initialState = {name: []}

    const [eachValue, setValue] = useState(initialState)
    const {name} = eachValue

    const filter = (e) => {
        const data = e.target.value
        var skills = displayInternship.filter(skill => skill.requiredSkills.toString().toUpperCase().includes((data).toUpperCase()))
        // console.log("skills", skills)
        
        setValue({...eachValue,  name: skills})
    }

    return (
        <div>
            <Container>
                <h1 className="text-center mt-5 text-secondary">Welcome to Internship Page</h1>
                <Row>
                    <Col md={11} className="ml-5 mt-5">
                    <InputGroup size="lg" className="mb-3">
                        <FormControl
                        type="search"
                        placeholder="Search By Skills"
                        onChange= {filter}
                        />
                        <InputGroup.Append>
                        <Button variant="outline-dark">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                </Row>

                {
                    name.length === 0 ? (<div>
                            <Card className="border-0 ml-5 mr-5">
                    {
                        props.internship.map(cmp => {
                            return (
                                <Card.Body className="border bg-light rounded-lg pl-5 mt-5">
                                    <Card.Header className="border-0">
                                        <Row>
                                            <Col md={8}><h3>{cmp.position}</h3></Col>
                                            <Col md={4}><span className="text-secondary ml-4" style={{fontSize: "20px"}}>{cmp.internship}</span></Col>
                                        </Row>
                                    </Card.Header>
                                <Row>
                                    <Col md={8} className="mt-4">
                                        <h5 className="text-secondary ml-3">SKILLS</h5>
                                        <p className="ml-3">{cmp.requiredSkills}</p>
                                    </Col>
                                    <Col md={4} className="text-left mt-4">
                                    <h4 className="text-secondary ml-3 ">{(cmp.name).toUpperCase()}</h4>
                                    <p className="ml-3" style={{fontSize: "20px"}}><FaMapMarkerAlt className="text-danger" />&nbsp;{cmp.location}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8}>
                                         <p className="ml-3 mt-4" style={{fontSize: "15px"}}>STIPEND:- <FaRupeeSign style={{fontSize: "18px"}} />&nbsp;
                                         <b>{cmp.stipend}</b> </p>
                                    </Col>
                                    <Col md={4}>
                                            <p className="text-secondary mt-4 ml-3" style={{fontSize: "20px", float: "left"}}>
                                           ApplyBy:- {moment(cmp.appliedBy).format('MMMM Do YYYY')}</p>
                                    </Col>
                                </Row>
                                    {
                                        props.user.role === 'admin' ? 
                                        <Nav.Link href={`/company/editprofile/${cmp._id}`}>Edit</Nav.Link>
                                        : 
                                        <Nav.Link href={`/assessment/${cmp._id}`}><Button style={{fontSize: "20px", float: "right"}}>Apply Now</Button></Nav.Link>
                                    }
                                </Card.Body>
                            )
                        })
                    }
                </Card>
                    </div>) : (

                        <div>
                             <Card className="border-0 ml-5 mr-5">
                    {
                        name.map(cmp => {
                            return (
                                <Card.Body className="border bg-light rounded-lg pl-5 mt-5">
                                    <Card.Header className="border-0">
                                        <Row>
                                            <Col md={8}><h3>{cmp.position}</h3></Col>
                                            <Col md={4}><span className="text-secondary ml-4" style={{fontSize: "20px"}}>{cmp.internship}</span></Col>
                                        </Row>
                                    </Card.Header>
                                <Row>
                                    <Col md={8} className="mt-4">
                                        <h5 className="text-secondary ml-3">SKILLS</h5>
                                        <p className="ml-3">{cmp.requiredSkills}</p>
                                    </Col>
                                    <Col md={4} className="text-left mt-4">
                                    <h4 className="text-secondary ml-3 ">{(cmp.name).toUpperCase()}</h4>
                                    <p className="ml-3" style={{fontSize: "20px"}}><FaMapMarkerAlt className="text-danger" />&nbsp;{cmp.location}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8}>
                                         <p className="ml-3 mt-4" style={{fontSize: "15px"}}>STIPEND:- <FaRupeeSign style={{fontSize: "18px"}} />&nbsp;
                                         <b>{cmp.stipend}</b> </p>
                                    </Col>
                                    <Col md={4}>
                                            <p className="text-secondary mt-4 ml-3" style={{fontSize: "20px", float: "left"}}>
                                           ApplyBy:- {moment(cmp.appliedBy).format('MMMM Do YYYY')}</p>
                                    </Col>
                                </Row>
                                    {
                                        props.user.role === 'admin' ? 
                                        <Nav.Link href={`/company/editprofile/${cmp._id}`}>Edit</Nav.Link>
                                        : 
                                        <Nav.Link href={`/assessment/${cmp._id}`}><Button style={{fontSize: "20px", float: "right"}}>Apply Now</Button></Nav.Link>
                                    }
                                </Card.Body>
                            )
                        })
                    }
                </Card>
                        </div>
                    )
                } 
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        internship: state.internship,
        user: state.user
    }
}

export default connect(mapStateToProps)(Internship)