import axios from '../config/axios'
import swal from "sweetalert"


// Add Company
export const AddCompany = (company) => {
    return {type: "ADD_COMPANY", payload: company }
}

export const startAddCompany = (formData) => {
    console.log("companyAction", formData)
    return (dispatch) => {
        axios.post('/api/company', formData, {
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
                const company = response.data
                dispatch(AddCompany(company))
            }
        })
    }
}

//Set Company 

export const SetCompany = (company) => {
    //console.log("companyData", company)
    return { type: "SET_COMPANY", payload: company }
}

export const startSetCompany = () => {
    return (dispatch) => {
        axios.get('/api/company', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const company = response.data
            // console.log("companyData", company)
            dispatch(SetCompany(company))
        })
    }
}

// EditCompany profile

export const editCompany = (company) => {
    return { type: 'EDIT_COMPANY', payload: company }
}

export const startEditCompany = (company) => {
    return (dispatch) => {
        axios.put(`/api/company/${company.id}`, company, {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            //console.log("update",response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                swal({
                    title:'Updated successfully',   
                    icon: 'success'
                })
                // console.log("update", response.data)
                // alert('updated successfully')
                const company = response.data 
                dispatch(editCompany(company))
            }
        })
    }
}