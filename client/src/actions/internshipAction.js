import axios from '../config/axios'


//  Add Internship
export const AddInternship = (internship) => {
    return {type: "ADD_INTERNSHIP", payload: internship }
}

export const startAddInternship = (formData) => {
    console.log("InternshipAction", formData)
    return (dispatch) => {
        axios.post('/api/internship', formData, {
            headers: ({
                'Authorization': localStorage.getItem('authToken')
            })
        })
        .then((response) => {
            console.log("add" ,response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('successfully added')
                const internship = response.data
                dispatch(AddInternship(internship))
            }
        })
    }
}

//Set Internship 

export const SetInternship = (internship) => {
    //console.log("companyData", company)
    return { type: "SET_INTERNSHIP", payload: internship }
}

export const startSetInternship = () => {
    return (dispatch) => {
        axios.get('/api/internship', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const internship = response.data
            // console.log("companyData", company)
            dispatch(SetInternship(internship))
        })
    }
}

// Delete internship

export const deleteInternship = (internship) => {
    return {type: "DELETE_INTERNSHIP", payload: internship}
}

export const startDeleteInternship = (id) => {
    return (dispatch) => {
        axios.delete(`/api/internship/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            //alert('deleted successfully')
            const internship = response.data
            dispatch(deleteInternship(internship))
        })
    }
}