import React, {useState}  from 'react'
import { connect } from 'react-redux'
import {Container, Form, Col, Row, Button} from 'react-bootstrap'
import { startAddResume } from '../../actions/resumeAction'

function ResumeForm(props) {
    //console.log(props)

    const initialInputState = {name: props.resume ? props.resume.name : '',
                               email: props.resume ? props.resume.email : '', 
                               mobileNumber: props.resume ? props.resume.mobileNumber : '', 
                               currentCity: props.resume ? props.resume.currentCity : '',
                               seniorSecondary: {
                                    college: props.resume ? props.resume.seniorSecondary.college : '', 
                                    board: props.resume ? props.resume.seniorSecondary.board : '', 
                                    passingYear: props.resume ? props.resume.seniorSecondary.passingYear : '', 
                                    grade: props.resume ? props.resume.seniorSecondary.grade : ''
                                },
                               graduation: {
                                   institution: props.resume ? props.resume.graduation.institution : '', 
                                   university: props.resume ? props.resume.graduation.university : '', 
                                   yearOfCompletion: props.resume ? props.resume.graduation.yearOfCompletion : '', 
                                   performance: props.resume ? props.resume.graduation.institution : '', 
                                   degree: props.resume ? props.resume.graduation.degree : '', 
                                   stream: props.resume ? props.resume.graduation.stream : ''
                                },
                                skills: props.resume ? props.resume.skills : '',
                                experience: props.resume ? props.resume.experience : '',
                                projects: {
                                    title: props.resume ? props.resume.projects.title : '', 
                                    startDate: props.resume ? props.resume.projects.startDate : '', 
                                    endDate: props.resume ? props.resume.projects.endDate : '', 
                                    link: props.resume ? props.resume.projects.link : ''}
                            };

    const [eachValue, setValue] = useState(initialInputState);
    const [eachValues, setValues] = useState(initialInputState.seniorSecondary);
    const [graduationValues, setGraduation] = useState(initialInputState.graduation);
    const [projectsValues, setProject] = useState(initialInputState.projects);

    const {name, email, mobileNumber, currentCity, skills, experience} = eachValue;
    const {college, board, passingYear, grade} = eachValues;
    const {institution, university, yearOfCompletion, performance, degree, stream} = graduationValues;
    const {title, startDate, endDate, link} = projectsValues;

    const handleChange = (e) => {
        setValue({...eachValue, [e.target.name]: e.target.value})
    }

    const handleChanges = (e) => {
        setValues ({...eachValues, [e.target.name]: e.target.value})
    }

    const handleGraduation = (e) => {
        setGraduation ({...graduationValues, [e.target.name]: e.target.value})
    }

    const handleProjects = (e) => {
        setProject ({...projectsValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        //console.log(name, email)
        e.preventDefault()
        const formData = {
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            currentCity: currentCity,

            seniorSecondary: {
            college: college,
            board: board,
            passingYear: passingYear,
            grade: grade
            },

            graduation: {
            institution: institution,
            university: university,
            yearOfCompletion: yearOfCompletion,
            performance: performance,
            degree: degree,
            stream: stream
            },
            skills: skills,
            experience: experience,

            projects: {
            title: title,
            startDate: startDate,
            endDate: endDate,
            link: link
            }
        }
        //console.log(formData)
        props.dispatch(startAddResume(formData))
        props.resume && (formData.id = props.resume._id)

        props.handleEditSubmit(formData)
        //console.log("check here",props)
    }
   
    return (
        <div>
            <Container>
                <h1 className="text-center mt-3 text-secondary">Create Resume</h1>
                <Form onSubmit={handleSubmit}>

                    {/* //1st Row */}
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="name">Name:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="email">Email:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            //required
                        />
                        </Col>
                    </Row>
                    {/* // 2nd Row */}
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="number">mobileNumber:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="number"
                                name="mobileNumber"
                                value={mobileNumber}
                                onChange={handleChange}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="city">Current-City:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="city"
                            name="currentCity"
                            value={currentCity}
                            onChange={handleChange}
                            //required
                        />
                        </Col>
                    </Row>

                    <h2 className="mt-3 text-secondary">Education</h2>
                    <h4 className="text-secondary"> Senior Secondary</h4>

                    {/* //3rd Row */}
                    <Row className="pt-0">
                        <Col md={6}>
                            <Form.Label htmlFor="college">College:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="college"
                                name="college"
                                value={college}
                                onChange={handleChanges}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="board">Board:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="board"
                            name="board"
                            value={board}
                            onChange={handleChanges}
                            //required
                        />
                        </Col>
                    </Row>
                    {/* // 4th  Row */}
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="passingYear">Year of Completion:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="passingYear"
                                name="passingYear"
                                value={passingYear}
                                onChange={handleChanges}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="grade">Grade:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="grade"
                            name="grade"
                            value={grade}
                            onChange={handleChanges}
                            //required
                        />
                        </Col>
                    </Row>

                    <h4 className="text-secondary pt-5">Graduation</h4>

                    {/* //5rd Row */}
                    <Row className="pt-0">
                        <Col md={6}>
                            <Form.Label htmlFor="institution">institution:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="institution"
                                name="institution"
                                value={institution}
                                onChange={handleGraduation}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="university">University:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="university"
                            name="university"
                            value={university}
                            onChange={handleGraduation}
                            //required
                        />
                        </Col>
                    </Row>
                    {/* // 6th  Row */}
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="yearOfCompletion">Year of Completion:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="yearOfCompletion"
                                name="yearOfCompletion"
                                value={yearOfCompletion}
                                onChange={handleGraduation}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="performance">Performance:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="performance"
                            name="performance"
                            value={performance}
                            onChange={handleGraduation}
                            //required
                        />
                        </Col>
                    </Row>

                    {/* // 7th  Row */}
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="degree">Degree:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="degree"
                                name="degree"
                                value={degree}
                                onChange={handleGraduation}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="stream">Stream:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="stream"
                            name="stream"
                            value={stream}
                            onChange={handleGraduation}
                            //required
                        />
                        </Col>
                    </Row>

                    <h3 className="mt-3 text-secondary">Technicak Skills</h3>
                        {/* 8th Row */}
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="skills">Skills:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="skills"
                                name="skills"
                                value={skills}
                                onChange={handleChange}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="experience">Experience:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="experience"
                            name="experience"
                            value={experience}
                            onChange={handleChange}
                            //required
                        />
                        </Col>
                    </Row>
                    <h3 className="mt-3 text-secondary">Projects</h3>
                     {/* 9th Row */}
                     <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="title">Title:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={handleProjects}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="startDate">StatrtDate:-</Form.Label>
                            <Form.Control 
                                type="Date"
                                id="startDate"
                                name="startDate"
                                value={startDate}
                                onChange={handleProjects}
                                //required
                            />
                        </Col>
                    </Row>
                    {/* // 10th row */}
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="endDate">EndDate:-</Form.Label>
                            <Form.Control 
                                type="Date"
                                id="endDate"
                                name="endDate"
                                value={endDate}
                                onChange={handleProjects}
                                //required
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="link">Link:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="link"
                                name="link"
                                value={link}
                                onChange={handleProjects}
                                //required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} style={{marginLeft: "290px"}}>
                    <Button  size="lg" block  className="mt-3 pl-5 pr-5">
                        <input type="submit" className="btn" value="SUBMIT"/></Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
    
}

export default connect()(ResumeForm)