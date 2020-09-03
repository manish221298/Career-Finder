import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Button, Nav} from 'react-bootstrap'
import { FaRupeeSign, FaMapMarkerAlt } from "react-icons/fa"

function FresherJob(props){
    //console.log(props.company)
    return (
        <div>
            <Container>
                {/* {
                    console.log("user", props.user)
                } */}
                <h1 className="text-center mt-5 text-secondary">Welcome to Freshers Job</h1>
                <Card className="border-0 ml-5 mr-5">
                    {
                        props.company.map(cmp => {
                            return (
                                <Card.Body className="border bg-light rounded-lg pl-5 mt-5">
                                    <Card.Header className="border-0"><h3>{cmp.position} <span className="text-secondary" style={{fontSize: "20px", float: "right"}}>{cmp.fresher}</span></h3></Card.Header>
                                    <h4 className="text-secondary ml-3">{cmp.name}</h4>
                                    <p className="ml-3 mt-4" style={{fontSize: "20px"}}><FaMapMarkerAlt className="text-secondary" />&nbsp;{cmp.location}</p>
                                    <p className="ml-3 mt-4" style={{fontSize: "20px"}}>CTC:- <FaRupeeSign style={{fontSize: "18px"}} />&nbsp;<b>{cmp.salary}</b> <span className="text-secondary" style={{fontSize: "20px", float: "right"}}>{cmp.appliedBy}</span></p>
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
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        company: state.company,
        user: state.user
    }
}

export default connect(mapStateToProps)(FresherJob)