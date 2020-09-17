import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {Container, Form, Col, Row, Button} from 'react-bootstrap'
import { startAddAssessment } from '../../actions/assessmentAction'
import { findCompany } from '../../selectors/companySelector'
import { findInternship } from '../../selectors/internshipSelector' //
import Footer from '../auth/Footer'

function Assessment(props){
    const companyName = (props.company)?.name
    const internshipName = (props.internship)?.name //
    //console.log("knfzvkx", internshipName)
    
    const name = props.resume.map(cv => (cv.name)).toString()
    const email = props.resume.map(cv => cv.email).toString()
    const mobileNumber = props.resume.map(cv => cv.mobileNumber).toString()
    //console.log(mobileNumber)

    const initialInputState = {
        assessment1: '',
        assessment2: '', 
        companyName: '',
        internshipName: '', //
        name: '',
        email: '',
        mobileNumber: ''
        //status: true
    }
    
    const [eachState, setState] = useState(initialInputState)

    const {assessment1, assessment2 } = eachState

    //console.log("message", companyName)

    const handleChange = (e) => {
        setState({...eachState, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            assessment1: assessment1,
            assessment2: assessment2,
            companyName: companyName,
            internshipName: internshipName, //
            name: name,
            email: email,
            mobileNumber: mobileNumber //(props.company)?.name
        }
        //console.log('formData', formData)
        props.dispatch(startAddAssessment(formData))
    }

    const data = "Mention in detail what relevent skill or past experience you hava for this job. What excites you about this job? Why would you be a good fit?"

    return (
        <div>
            {
                //console.log("company", props.company.map(cmp => cmp.position))
            }
             <Container onSubmit={handleSubmit}>
                <h2 className="text-center mt-5 ml-5 mr-5" style={{backgroundColor: "#f2f2f2"}}><b>Assessment questions</b></h2>
              

               <Form >
                   <Row>
                       <Col md={8}>
                        <input className="ml-5 border-0 text-left text-secondary" style={{fontSize: "35px", outline: "none"}}
                                value={name}
                            /><br/>
                        <input className="ml-5 mt-4 border-0 text-left text-secondary" style={{outline: "none"}}
                                value={email}
                            /><br/>
                        <input className="ml-5 mt-2 border-0 text-left text-secondary" style={{outline: "none"}}
                                value={mobileNumber} 
                            />
                       </Col>
                       <Col md={4}>
                           { companyName ?  
                            <input className="ml-5 border-0 text-center text-secondary" style={{fontSize: "35px", outline: "none"}}
                                value={companyName}
                                
                            /> :
                            <input className="ml-5 border-0 text-center text-secondary" style={{fontSize: "35px", outline: "none"}}
                                value= {internshipName}
                                
                            />
                           }
                       </Col>
                   </Row>
                   <hr/>
                   <Form.Label className="mt-4 ml-5">Why should you be hired for this role?</Form.Label>
               {
                   <p className="ml-5 text-secondary">{props.user.username}, please answer this question carefully. It will increase your chances of getting hired.</p>
               }
                   <Row>
                       <Col md={11}>
                            <Form.Control className="ml-5" as="textarea" rows="8"
                                placeholder={data}
                                type="text"
                                id="assessment1"
                                name="assessment1"
                                value={assessment1}
                                onChange={handleChange}
                                required
                            />
                       </Col>
                   </Row>
                   <Form.Label className="mt-4 ml-5">Please share links to your latest web development projects.</Form.Label>
                   <p className="ml-5 text-secondary">If you want to share any documents or files, please share it on <Link to="mail.google.com">iammnsh01@gmail.com</Link> and paste the public link in the answer.</p>
                   <Row>
                       <Col md={11}>
                            <Form.Control className="ml-5 text-center" as="textarea" rows="8"
                                placeholder="Enter text..."
                                type="text"
                                id="assessment2"
                                name="assessment2"
                                value={assessment2}
                                onChange={handleChange}
                                required
                            />
                       </Col>
                   </Row>
                   <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                        <Button size="sm" block   className="mt-3 mb-3 pl-5 pr-5">
                        <input type="submit" className="btn" value="SUBMIT"/></Button>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    <hr/>
               </Form>
               
            </Container>
            <Footer />
        </div>
    )
    
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    const ids = props.match.params.id //
    return {
        user: state.user,
        company: findCompany(state.company, id),
        internship: findInternship(state.internship, ids), //
        //company: state.company,
        resume: state.resume
    }
}

export default connect(mapStateToProps)(Assessment)
