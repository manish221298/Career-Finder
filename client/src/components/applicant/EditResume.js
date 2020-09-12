import React from 'react'
import { connect } from 'react-redux'
import { findResume } from  '../../selectors/resumeSelector'
import ResumeForm from './ResumeForm'
import Footer from '../auth/Footer'
import { Container } from 'react-bootstrap'
import { startEditResume } from '../../actions/resumeAction'

function EditResume(props) {

    const handleEditSubmit = (resume) => {
        props.dispatch(startEditResume(resume))
    }

    return (
        <div>
            <h1 className="text-center mt-3 text-secondary">Edit Resume</h1>
            <Container>
                {
                    props.resume && (
                        <div>
                            <ResumeForm resume={props.resume} handleEditSubmit={handleEditSubmit} />
                        </div>
                    )
                }
            </Container>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        resume: findResume(state.resume, id)
    }
}

export default connect(mapStateToProps)(EditResume)