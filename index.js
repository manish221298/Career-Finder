const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const configureDB = require('./config/database')
configureDB()
const routes = require('./config/routes')
const port = 3055

app.use(cors())

app.use(express.json())
app.use('/', routes)



app.listen(port, () => {
    console.log('listening on port', port)
})