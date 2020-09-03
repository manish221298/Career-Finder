import React from 'react'
import { connect } from 'react-redux'
import { findCompany } from '../../selectors/companySelector'

import { startEditCompany } from '../../actions/companyAction'
import ProfileForm from './ProfileForm'


function EditProfile(props){

    const handleEditSubmit = (company) => {
        props.dispatch(startEditCompany(company))
    }
    console.log("show", props)
    return (
        <div>
            {//console.log(props.company),
             props.company && (
                <div>
                    <ProfileForm company = {props.company} handleEditSubmit = {handleEditSubmit} />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
     //console.log("ids", id)
    return {
       company: findCompany(state.company, id)
        //company: state.company
    }
}

export default connect(mapStateToProps)(EditProfile)

