import React, {useState} from 'react'
import { connect } from 'react-redux'
import axios from '../../config/axios'
import { Container, Card, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'


function ShowApplicant(props){
    const displayAssessment = props.assessment

    const initialState = {name: []}
    const [eachValue, setValue] = useState(initialState)
    const {name} = eachValue

    const filter = (e) => {
        const data = e.target.value
        //console.log("value", data)
        const company = displayAssessment.filter(cmp => cmp.companyName)
        //console.log("filterCompany", company)
        setValue({...setValue, name: company})
    }
    const filters = (e) => {
        const data = e.target.value
        //console.log("value", data)
        const company = displayAssessment.filter(cmp => cmp.internshipName)
        //console.log("filterCompany", company)
        setValue({...setValue, name: company})
    }

    const handleSend = (applicant) => {
        let recipent = applicant.mobileNumber
        let textmessage = `Congratulation ${applicant.name} Your Resume has been shortlisted`

        axios.post(`/api/twilio?recipent=${recipent}&textmessage=${textmessage}`)
        .catch((applicant) => {
            console.error(applicant)
        })
    }

    return (
        <div>
            <Container>
                <h2 className="text-center mt-5 ml-5 mr-5" style={{backgroundColor: "#f2f2f2"}}><b>APPLICANT</b></h2>
                <Row>
                    <Col md={5} className="ml-5 mt-5">
                    <InputGroup size="lg" className="mb-3">
                        <FormControl
                        type="search"
                        placeholder="SearchByCompanyName(FresherJob)"
                        onChange= {filter}
                        />
                        <InputGroup.Append>
                        <Button variant="outline-dark">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                    <Col md={5} className="ml-5 mt-5">
                    <InputGroup size="lg" className="mb-3">
                        <FormControl
                        type="search"
                        placeholder="Search By Company Name(Intern)"
                        onChange= {filters}
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
                        props.assessment.map(cmp => {
                            return (
                                <Card.Body className="border-0 rounded-lg pl-5 mt-5" style={{backgroundColor: "#f2f2f2"}}>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <p style={{color: "#404040", fontSize: "35px" }}>{cmp.name}</p>
                                            <p style={{color: "#4d4d4d"}} >{cmp.email}</p>
                                            <p style={{color: "#4d4d4d"}} >{cmp.mobileNumber}</p>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <p className="text-right" style={{fontSize: "35px", color: "#404040"}}>{cmp.companyName}</p>
                                            <p className="text-right" style={{fontSize: "35px", color: "#404040"}}>{cmp.internshipName}</p>
                                        </Col>
                                    </Row>
                                    <hr className="bg-dark"/>
                                    <Row>
                                        <Col>
                                        <b>Why should you be hired for this role?</b>
                                        <p>{cmp.assessment1}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <b>Links of latest web development projects.</b>
                                        <p>{cmp.assessment2}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><Button onClick= { () => {
                                            handleSend(cmp)
                                        }}>SEND</Button></Col>
                                    </Row>
                                </Card.Body>
                            )
                        })
                    }
                </Card>
                    </div>) : ( <div>
                        <Card className="border-0 ml-5 mr-5">
                    {
                        name.map(cmp => {
                            return (
                                <Card.Body className="border-0 rounded-lg pl-5 mt-5" style={{backgroundColor: "#f2f2f2"}}>
                                    <Row>
                                        <Col md={6}>
                                            <p style={{color: "#404040", fontSize: "35px" }}>{cmp.name}</p>
                                            <p style={{color: "#4d4d4d"}} >{cmp.email}</p>
                                            <p style={{color: "#4d4d4d"}} >{cmp.mobileNumber}</p>
                                        </Col>
                                        <Col md={6}>
                                            <p className="text-right" style={{fontSize: "35px", color: "#404040"}}>{cmp.companyName}</p>
                                            <p className="text-right" style={{fontSize: "35px", color: "#404040"}}>{cmp.internshipName}</p>
                                        </Col>
                                    </Row>
                                    <hr className="bg-dark"/>
                                    <Row>
                                        <b>Why should you be hired for this role?</b>
                                        <p>{cmp.assessment1}</p>
                                    </Row>
                                    <Row>
                                        <b>Links of latest web development projects.</b>
                                        <p>{cmp.assessment2}</p>
                                    </Row>
                                    <Row>
                                        <Col><Button onClick= { () => {
                                            handleSend(cmp)
                                        }}>SEND</Button></Col>
                                    </Row>
                                </Card.Body>
                            )
                        })
                    }
                </Card>
                    </div>)
                }
                
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        assessment: state.assessment,
    }
}

export default connect(mapStateToProps)(ShowApplicant)