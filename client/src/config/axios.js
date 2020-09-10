import Axios from 'axios'

const axios = Axios.create({
    //baseURL: 'http://localhost:3055/'
    baseURL: '/'
})

export default axios;