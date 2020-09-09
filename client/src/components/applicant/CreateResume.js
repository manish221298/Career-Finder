import React from 'react'
import { connect } from 'react-redux'
//import { findResume } from  '../../selectors/resumeSelector'
import ResumeForm from './ResumeForm'
import Footer from '../auth/Footer'
import { startAddResume } from '../../actions/resumeAction'

function CreateResume(props) {

    const handleEditSubmit = (resume) => {
        props.dispatch(startAddResume(resume))
    }

    return (
        <div>
            <ResumeForm handleEditSubmit={handleEditSubmit} />
            <Footer />
        </div>
    )
}



export default connect()(CreateResume)