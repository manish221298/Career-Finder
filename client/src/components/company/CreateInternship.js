import React from 'react'
import {connect} from 'react-redux'
import InternshipForm from './InternshipForm'
//import { startAddInternship } from '../../actions/internshipAction'

function CreateInternship(props){  

        const  handleEditSubmit = (company) => {
        
        //const redirect = () => props.history.push('/customer')
        // props.dispatch(startAddInternship(company))
    }
        return (
            <div>
                {/* <h2>Add Customer</h2> */}
                <InternshipForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(CreateInternship)
