import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Card, Row, Col, Nav} from 'react-bootstrap'

function ShowResume(props) {
    return (
        <div>
            <Container>
                <h1 className="text-center mt-5 text-secondary">Resume</h1>
                <Card className="border-0 ml-5 mr-5 ">
                    {
                        props.resume.map(resume => {
                            return (
                                <Card.Body className="border rounded-lg pl-5 mt-5">
                                    <h2><b>{resume.name}</b></h2>
                                    <p className="text-secondary">{resume.email}</p>
                                    <p className="text-secondary">{resume.mobileNumber}</p>
                                    <p className="text-secondary">{resume.currentCity}</p>
                                    <hr/>
                                    <Row>
                                        <Col md={4}>EDUCATION</Col>
                                        <Col md={8}>
                                            <p><b>{resume.graduation.degree}, {resume.graduation.stream}</b></p>
                                            <p className="text-secondary">{resume.graduation.institution},&nbsp;({resume.graduation.university})</p>
                                            <p className="text-secondary">PassingYear:- &nbsp;{resume.graduation.yearOfCompletion}</p>
                                            <p className="text-secondary">Performance:- &nbsp;{resume.graduation.performance}</p>
                                            <br/>
                                            <p><b>Senior Secondary (XII)</b></p>
                                            <p className="text-secondary">{resume.seniorSecondary.college},&nbsp;({resume.seniorSecondary.board})</p>
                                            <p className="text-secondary">PassingYear:-&nbsp;{resume.seniorSecondary.passingYear}</p>
                                            <p className="text-secondary">Performance:-&nbsp;{resume.seniorSecondary.grade}</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col md={4}>SKILLS</Col>
                                        <Col md={8}><b>{resume.skills}</b></Col>
                                    </Row><hr/>
                                    <Row>
                                        <Col md={4}>PROJECT</Col>
                                        <Col md={8}>
                                            <p><b>{resume.projects.title}</b></p>
                                            <p className="text-secondary">{resume.projects.startDate}-&nbsp;{resume.projects.endDate}</p>
                                            <p>Projects Link:-<Link className="text-info">{resume.projects.link}</Link></p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <Nav.Link href={`/applicant/editresume/${resume._id}`}>Edit</Nav.Link>
                                        </Col>
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
        resume: state.resume,
        user: state.user
    }
}

export default connect(mapStateToProps)(ShowResume)