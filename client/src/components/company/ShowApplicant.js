import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Row, Col } from 'react-bootstrap'

function ShowApplicant(props){
    return (
        <div>
            <Container>
                {
                    console.log("assessment", props)
                }
                <h2 className="text-center mt-5 ml-5 mr-5" style={{backgroundColor: "#f2f2f2"}}><b>APPLICANT</b></h2>
                <Card className="border-0 ml-5 mr-5">
                    {
                        props.assessment.map(cmp => {
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
                                </Card.Body>
                            )
                        })
                    }
                </Card>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        assessment: state.assessment,
        //company: state.company
    }
}

export default connect(mapStateToProps)(ShowApplicant)