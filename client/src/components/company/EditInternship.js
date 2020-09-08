import React from 'react'
import { connect } from 'react-redux'
//import { findInternship } from '../../selectors/internshipSelector'

//import { startEditInternship } from '../../actions/internshipAction'
import InternshipForm from './InternshipForm'


function EditInternship(props){

    const handleEditSubmit = (internship) => {
        //props.dispatch(startEditInternship(internship))
    }
    console.log("show", props)
    return (
        <div>
            {//console.log(props.company),
             props.internship && (
                <div>
                    <InternshipForm internship = {props.internship} handleEditSubmit = {handleEditSubmit} />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
     //console.log("ids", id)
    return {
       //internship: findInternship(state.internship, id)
        //company: state.company
    }
}

export default connect(mapStateToProps)(EditInternship)

