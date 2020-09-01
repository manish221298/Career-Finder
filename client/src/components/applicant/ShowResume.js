import React from 'react'
import { connect } from 'react-redux'
import { Container, Card} from 'react-bootstrap'

function ShowResume(props) {
    return (
        <div>
            <Container>
                <h1 className="text-center mt-5 text-secondary">Resume</h1>
                <Card className="border-0 ml-5 mr-5">
                    {
                        //console.log("resume", props.resume),
                        // props.resume.map(resume => {
                        //     return (
                        //     <h1>resume</h1>
                        //     )
                        // })
                    }
                </Card>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        resume: state.resume,
        company: state.company
    }
}

export default connect(mapStateToProps)(ShowResume)