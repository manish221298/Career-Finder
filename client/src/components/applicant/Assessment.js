import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {Container, Form, Col, Row, Button} from 'react-bootstrap'

function Assessment(props){

    const initialInputState = {
        assessment1: '',
        assessment2: '', 
        status: true
    }

    const [eachState, setState] = useState(initialInputState)

    const {assessment1, assessment2 } = eachState

    const data = "Mention in detail what relevent skill or past experience you hava for this job. What excites you about this job? Why would you be a good fit?"

    return (
        <div>
            <Container>
               <h2 className="text-left mt-5 ml-5"><b>Assessment questions</b></h2>
               <Form.Label className="mt-4 ml-5">Why should you be hired for this role?</Form.Label>
               {
                   <p className="ml-5 text-secondary">{props.user.username}, please answer this question carefully. It will increase your chances of getting hired.</p>
               }

               <Form>
                   <Row>
                       <Col md={10}>
                            <Form.Control className="ml-5" as="textarea" rows="8"
                                placeholder={data}
                                type="textfield"
                                id="position"
                                name="position"
                                //value={position}
                                //onChange={handleChange}
                                required
                            />
                       </Col>
                   </Row>
                   <Form.Label className="mt-4 ml-5">Please share links to your latest web development projects.</Form.Label>
                   <p className="ml-5 text-secondary">If you want to share any documents or files, please share it on <Link to="mail.google.com">iammnsh01@gmail.com</Link> and paste the public link in the answer.</p>
                   <Row>
                       <Col md={10}>
                            <Form.Control className="ml-5" as="textarea" rows="8"
                                placeholder="Enter text..."
                                type="textfield"
                                id="position"
                                name="position"
                                //value={position}
                                //onChange={handleChange}
                                required
                            />
                       </Col>
                   </Row>
                   <Row>
                        <Col md={6} style={{marginLeft: "290px"}}>
                        <Button   className="mt-3 pl-5 pr-5">
                        <input type="submit" className="btn" value="SUBMIT"/></Button>
                        </Col>
                    </Row>
               </Form>
               
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Assessment)

