// const mongoose = require('mongoose')

// mongoose.Promise = global.Promise

// const CONNECTION_URI= process.env.MONGODB_URI || "mongodb://localhost:27017/Career-Finder"

// const configureDB = () => {
//     mongoose.connect(CONNECTION_URI, {       
//             useNewUrlParser: true, 
//             useUnifiedTopology: true, 
//             useCreateIndex: true,
//             useFindAndModify: false,

//     })
//     .then(() => {
//         console.log('connected to db')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

// module.exports = configureDB

//**************************************** */
const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/career-finder', {       
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true,
            useFindAndModify: false,

    })
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = configureDB