const authenticateUser = require('../middlewares/authentication')

function authorizedUser (req, res, next){
    if(authenticateUser){
        req.user.role.map(role => {
            if(role === "admin"){
                next();
            }
            else if(role === "user"){
               next();
            }
        })
    }
}

module.exports = authorizedUser