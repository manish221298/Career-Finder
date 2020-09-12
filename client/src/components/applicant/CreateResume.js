import React from 'react'
import { connect } from 'react-redux'
//import { findResume } from  '../../selectors/resumeSelector'
import ResumeForm from './ResumeForm'
import Footer from '../auth/Footer'
import { Container } from 'react-bootstrap'
import { startAddResume } from '../../actions/resumeAction'

function CreateResume(props) {

    const handleEditSubmit = (resume) => {
        props.dispatch(startAddResume(resume))
    }

    return (
        <div>
            <h1 className="text-center mt-3 text-secondary">Create Resume</h1>
            <Container>
                <ResumeForm handleEditSubmit={handleEditSubmit} />
            </Container>
            <Footer />
        </div>
    )
}



export default connect()(CreateResume)