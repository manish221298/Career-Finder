import axios from '../config/axios'
import swal from 'sweetalert'

export const addAssessment = (assessment) => {
    return {type: "ADD_ASSESSMENT", payload: assessment}
}

export const startAddAssessment = (formData) => {
    return (dispatch) => {
        axios.post('/api/assessment', formData, {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            swal({  
                icon: 'success',
                title:'Applied Successfully', 
                text: "If your resume has been selected, then you will receive a text or mail from our end"
            })
            const assessment = response.data
            console.log("assessment", assessment)
            dispatch(addAssessment(assessment))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const setAssesssment = (assessment) => {
    return {type: "SET_ASSESSMENT", payload: assessment}
}

export const startSetAssessment = () => {
    return (dispatch) => {
        axios.get('/api/assessment', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const assessment = response.data
            dispatch(setAssesssment(assessment))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}