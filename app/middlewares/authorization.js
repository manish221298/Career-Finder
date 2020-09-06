const authenticateUser = require('../middlewares/authentication')

function authorizedUser (req, res, next){
    if(authenticateUser){
        req.user.role.map(role => {
            if(role === "user"){
                next();
            }
            else if(role === "admin"){
               if(req.url === "/resume/create"){
                   if(req.method === "GET"){
                       next();
                   }
                   else{
                       res.status(403).send({
                           notice: "you are not authorized to access the route"
                       })
                   }
               }
               if(req.url === "/api/assessment"){
                   if(req.method === "GET"){
                       next();
                   }
                   else{
                    res.status(403).send({
                        notice: "you are not authorized to access the route"
                    })
                }
               }
            }
        })
    }
}

module.exports = authorizedUser