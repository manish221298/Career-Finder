import React, { useState } from "react"
import {Container, Form, Col, Row, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { startAddInternship } from "../../actions/internshipAction";

function InternshipForm(props){
    //console.log("props", props)

    const initialInputState = {position: props.company ? props.company.position : '',
                               name: props.company ? props.company.name : '',
                               location: props.company ? props.company.location : '',
                               requiredSkills: props.company ? props.company.requiredSkills : '',
                               stipend: props.company ? props.company.stipend : '',
                               internship: props.company ? props.company.internship : '', 
                               appliedBy: props.company ? props.company.appliedBy : '', 
                               numberOfOpening: props.company ? props.company.numberOfOpening : ''
                            }

    const [eachValue, setValue] = useState(initialInputState);

    const { position, name, location, requiredSkills, stipend, internship, appliedBy, numberOfOpening } = eachValue

    const handleChange = (e) => {
        setValue({...eachValue, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            position: position,
            name: name,
            location: location,
            requiredSkills: requiredSkills,
            stipend: stipend,
            internship: internship,
            appliedBy: appliedBy,
            numberOfOpening: numberOfOpening
        }
        console.log(formData)
         props.dispatch(startAddInternship(formData))
        //console.log("formData", props.company)
        // props.company && (formData.id = props.company._id)
        // props.handleEditSubmit(formData)
    }

    return (
        <div>
             <Container onSubmit={handleSubmit}>
                <h1 className="text-center mt-5 text-secondary">Create Internship Profile</h1>
                <Form>
                {/* //1st Row */}
                <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="position">Position:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="position"
                                name="position"
                                value={position}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="name">CompanyName:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                        </Col>
                    </Row>

                    {/* //2nd Row */}
                <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="location">Location:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="location"
                                name="location"
                                value={location}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col md={6}>
                        <Form.Label htmlFor="requiredSkills">RequiredSkills:-</Form.Label>
                        <Form.Control 
                            type="text"
                            id="requiredSkills"
                            name="requiredSkills"
                            value={requiredSkills}
                            onChange={handleChange}
                            required
                        />
                        </Col>
                    </Row>
                    {/* ////***3rd Row */}

                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="internship">Internship:-</Form.Label>
                            <Form.Control 
                                type="String"
                                id="internship"
                                name="internship"
                                value={internship}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="appliedBy">AppliedBy:-</Form.Label>
                            <Form.Control 
                                type="Date"
                                id="appliedBy"
                                name="appliedBy"
                                value={appliedBy}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>

                    {/* /////// 4th Row */}
                    <Row className="pt-3">
                        <Col md={6}>
                            <Form.Label htmlFor="stipend">Stipend:-</Form.Label>
                            <Form.Control 
                                type="String"
                                id="stipend"
                                name="stipend"
                                value={stipend}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="numberOfOpening">NumberOfOpening:-</Form.Label>
                            <Form.Control 
                                type="String"
                                id="numberOfOpening"
                                name="numberOfOpening"
                                value={numberOfOpening}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} style={{marginLeft: "290px"}}>
                        <Button  size="lg" block  className="mt-5 pl-5 pr-5">
                        <input type="submit" className="btn" value="SUBMIT"/></Button>
                        </Col>
                    </Row>
                </Form>
             </Container>
        </div>
    )
}

export default connect()(InternshipForm)
//export default InternshipForm