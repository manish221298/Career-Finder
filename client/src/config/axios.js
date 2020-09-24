import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3055'
    //baseURL: '/'
})

export default axios;

// import Axios from 'axios'
// const URL = window.location.origin.includes('localhost') ? "http://localhost:3055" : "/"
// const axios = Axios.create({
//   baseURL: URL
// //   baseURL:'/api'
// })

// export default axios