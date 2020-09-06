import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { Container, Card, Row, Col} from 'react-bootstrap'

function ShowResume(props) {
    return (
        <div>
            <Container>
                <h1 className="text-center mt-5 text-secondary">Applicant Resume</h1>
                <Card className="border-0 ml-5 mr-5 ">
                    {
                        props.admin.map(admin => {
                            return (
                                <Card.Body className="border rounded-lg pl-5 mt-5">
                                    <h2><b>{admin.name}</b></h2>
                                    <p className="text-secondary">{admin.email}</p>
                                    <p className="text-secondary">{admin.mobileNumber}</p>
                                    <p className="text-secondary">{admin.currentCity}</p>
                                    <hr/>
                                    <Row>
                                        <Col md={4}>EDUCATION</Col>
                                        <Col md={8}>
                                            <p><b>{admin.graduation.degree}, {admin.graduation.stream}</b></p>
                                            <p className="text-secondary">{admin.graduation.institution},&nbsp;({admin.graduation.university})</p>
                                            <p className="text-secondary">PassingYear:- &nbsp;{admin.graduation.yearOfCompletion}</p>
                                            <p className="text-secondary">Performance:- &nbsp;{admin.graduation.performance}</p>
                                            <br/>
                                            <p><b>Senior Secondary (XII)</b></p>
                                            <p className="text-secondary">{admin.seniorSecondary.college},&nbsp;({admin.seniorSecondary.board})</p>
                                            <p className="text-secondary">PassingYear:-&nbsp;{admin.seniorSecondary.passingYear}</p>
                                            <p className="text-secondary">Performance:-&nbsp;{admin.seniorSecondary.grade}</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col md={4}>SKILLS</Col>
                                        <Col md={8}><b>{admin.skills}</b></Col>
                                    </Row><hr/>
                                    <Row>
                                        <Col md={4}>PROJECT</Col>
                                        <Col md={8}>
                                            <p><b>{admin.projects.title}</b></p>
                                            <p className="text-secondary">{moment(admin.projects.startDate).format('L')}&nbsp;--&nbsp;
                                                {moment(admin.projects.endDate).format('L')}</p>
                                            <p>Projects Link:-<Link className="text-info">{admin.projects.link}</Link></p>
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
        admin: state.admins,
        user: state.user,
    }
}

export default connect(mapStateToProps)(ShowResume)