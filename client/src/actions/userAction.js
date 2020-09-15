import axios from '../config/axios'
import swal from 'sweetalert';

export const setUser = (user) => {
    //console.log('userfind', user)
    return {type: 'SET_USER', payload: user}
}

export const startGetUser = () => {  // how it work from index page
    return (dispatch) => {
        axios.get('/users/account', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const user = response.data
            dispatch(setUser(user))
        })
    }
}

export const startRegisterUser = (FormData, redirect) => {
    return(dispatch) => { 
        //console.log('action generator', FormData)
        axios.post('/users/register', FormData)
        .then((response) => {
            //console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                swal({
                    icon:'info',
                    title:'error',
                    text: `${response.data.message}`,
                  });
            }
            else{
                swal({
                    title:'successfully Registered',
                    icon: 'success'
                })
                redirect()
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

// StartLoginUser
export const startLoginUser = (formData, redirect) => {
    return (dispatch) => {
        //console.log('action generator', formData)
        axios.post('/users/login', formData)
        .then((response) => {
            //console.log(response.data)
            if(response.data.hasOwnProperty("error")){
                alert(response.data.error)
            }
            else{
                swal({
                    title:'successfully logged in',
                    icon: 'success'
                })
                //console.log(response.data)
                localStorage.setItem('authToken', response.data.token)
                axios.get('/users/account', {
                    headers: {
                        'Authorization': localStorage.getItem('authToken') 
                    }
                })
                .then((response) => {
                   const user = response.data
                   //console.log(user)
                   dispatch(setUser(user))
                   redirect()
                })
                .catch((err) => {
                   console.log(err)
                })
                //redirect()
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

// startUserLogout
// export const startUserLogout = () => {
//     return (dispatch) => {

//     }
// }

