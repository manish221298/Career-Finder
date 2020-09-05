import React from 'react'
import { connect } from 'react-redux'
import { Container, Card } from 'react-bootstrap'

function ShowApplicant(props){
    return (
        <div>
            <Container>
                {
                    console.log("assessment", props)
                }
                <h1 className="text-center mt-5 text-secondary">Applicant</h1>
                {/* <Card className="border-0 ml-5 mr-5">
                    {
                        props.assessment.map(cmp => {
                            return (
                                <Card.Body className="border bg-light rounded-lg pl-5 mt-5">
                                    <Card.Header className="border-0"><h3>{cmp} <span className="text-secondary" style={{fontSize: "20px", float: "right"}}>{cmp.fresher}</span></h3></Card.Header>
                                    
                                </Card.Body>
                            )
                        })
                    }
                </Card> */}
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