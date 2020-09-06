import axios from '../config/axios'


//SetResumeForAdmin
export const SetResumeForAdmin = (resume) => {
    return {type: "SET_RESUMEFORADMIN", payload: resume}
}

export const startSetResumeForAdmin = () => {
    return (dispatch) => {
        axios.get('/resume/createforadmin', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const resume = response.data
            console.log(resume)
           dispatch(SetResumeForAdmin(resume))
        })
    }
}