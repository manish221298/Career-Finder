const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const configureDB = require('./config/database')
configureDB()
const routes = require('./config/routes')

const port = 3055  
//const port=process.env.PORT || 3055 // for heroku

app.use(cors())

app.use(express.json())
app.use('/', routes)

// for Heroku deployment
app.use(express.static(path.join(__dirname,"client/build")))
app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})



app.listen(port, () => {
    console.log('listening on port', port)
})