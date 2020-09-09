import React from 'react'
import { connect } from 'react-redux'
import { findResume } from  '../../selectors/resumeSelector'
import ResumeForm from './ResumeForm'
import Footer from '../auth/Footer'
import { startEditResume } from '../../actions/resumeAction'

function EditResume(props) {

    const handleEditSubmit = (resume) => {
        props.dispatch(startEditResume(resume))
    }

    return (
        <div>
            <h1>Edit Resume</h1>
            {
                props.resume && (
                    <div>
                        <ResumeForm resume={props.resume} handleEditSubmit={handleEditSubmit} />
                    </div>
                )
            }
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