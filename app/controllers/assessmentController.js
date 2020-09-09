const Assessment = require('../models/assessment')
const assessmentController = {}

//  Create Assessment Questions
assessmentController.create = (req, res) => {
    const body = req.body
    const assessment = new Assessment(body)

    assessment.user = req.user._id
    //assessment.user = req.company.id
    assessment.save()
    .then((assessment) => {
        res.json(assessment)
    })
    .catch((err) => {
        res.json(err)
    })
}

// Show Assessment
assessmentController.list = (req, res) => {
    Assessment.find()
    .then((assessment) => {
        res.json(assessment)
    })
    .catch((err) => {
        res.json(err)
    })
}

// Api for Delete 
// assessmentController.destroy = (req, res) => {

// }

assessmentController.send = (req, res) => {
    const accountSid = "AC4325087794a193b3e375a538d0977026"
    const authToken = "b8c53a05f6b3f81ddc3819b5d4edd65b"

    const client = require('twilio')(accountSid,authToken);
    const { recipent, textmessage} = req.query

    client.messages.create({
        body:textmessage,
        from:'+18305326638',
        to:`+91${recipent}`,
    }).then((message)=>console.log(message.sid))
    console.log("to",recipent,"message",textmessage)
 }



module.exports = assessmentController
