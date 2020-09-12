// const User = require('../models/user')
// const usersController = {}
// const bcryptjs = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// usersController.register = (req, res) => {
//     const body = req.body 
//     User.findOne ({email:body.email})
//     .then( user =>{
//         if( user ) {
//             res.json({error:'Email already registered'})
//         }
//     })

//     const user = new User(body)

//     // Password encryption
//     bcryptjs.genSalt()
//     .then((salt) => {
//         bcryptjs.hash(user.password, salt)
//         .then((encrypted) => {
//             user.password = encrypted

//         //Once  Passwords get encrypted then we save the user record into the database
//             user.save()
//             .then((user) => {
//                 res.json(user)
//             })
//             .catch((err) => {
//                 res.json(err)
//             })
//         })
//     })
        
//     /*
//     const user = new User()
//     user.username = body.username 
//     user.email = body.email
//     user.password = body.password
//     //*****  instead of doing above expression we do like ***const user = new User(body)
//     */
// }

// usersController.login = (req, res) => {
//     const body = req.body 
//     User.findOne({ email: body.email }) 
//         .then((user) => {
//             if(!user) {
//                 res.json({ 
//                     error: 'invalid email or password'
//                 })
//             }

//             bcryptjs.compare(body.password, user.password)
//                 .then((match) => {
//                     if(match) {
//                         const tokenData = {
//                             _id: user._id,
//                             email: user.email,
//                             username: user.username
//                         }
//                         const token = jwt.sign(tokenData, 'manish123', { expiresIn: '30d'})
//                         res.json({
//                             token: `Bearer ${token}`,tokenData
//                         })
//                     } else {
//                         res.json({ error: 'invalid email or password'})
//                     }
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         })
// }

// usersController.account = (req, res) => {
//     res.json(req.user)
// }

const User = require('../models/user')
const usersController = {}
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

usersController.register = (req, res) => {
    const body = req.body 
    User.findOne ({email:body.email})
    .then( user =>{
        if( user ) {
            res.json({error:'Email already registered'})
        }
    })

    const user = new User(body)

    // Password encryption
    bcryptjs.genSalt()
    .then((salt) => {
        bcryptjs.hash(user.password, salt)
        .then((encrypted) => {
            user.password = encrypted

        //Once  Passwords get encrypted then we save the user record into the database
            user.save()
            .then((user) => {
                res.json(user)
            })
            .catch((err) => {
                res.json(err)
            })
        })
    })
        
    /*
    const user = new User()
    user.username = body.username 
    user.email = body.email
    user.password = body.password
    //*****  instead of doing above expression we do like ***const user = new User(body)
    */
}

usersController.login = (req, res) => {
    const body = req.body 
    User.findOne({ email: body.email }) 
        .then((user) => {
            if(!user) {
                res.json({ 
                    error: 'invalid email or password'
                })
            }

            bcryptjs.compare(body.password, user.password)
                .then((match) => {
                    if(match) {
                        const tokenData = {
                            _id: user._id,
                            email: user.email,
                            username: user.username
                        }
                        const token = jwt.sign(tokenData, 'manish123', { expiresIn: '30d'})
                        res.json({
                            token: `Bearer ${token}`,tokenData
                        })
                    } else {
                        res.json({ error: 'invalid email or password'})
                    }
                })
        })
}

usersController.account = (req, res) => {
    res.json(req.user)
}



module.exports = usersController



// module.exports = usersController