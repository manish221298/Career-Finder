const Assessment = require('../models/assessment')
const assessmentController = {}

//  Create Assessment Questions
assessmentController.create = (req, res) => {
    const body = req.body
    const assessment = new Assessment(body)

    assessment.user = req.user._id
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
    Assessment.find({user: req.user._id})
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

module.exports = assessmentController