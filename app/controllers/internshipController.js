const Internship = require('../models/internship')
const internshipController = {}

// Create Profile for internship
internshipController.create = (req, res) => {
    const body = req.body
    const internship = new Internship(body)

    internship.user = req.user._id

    internship.save()
    .then((internship) => {
        res.json(internship)
    })
    .catch((internship) => {
        res.json(internship)
    })
}

// List internship profile
internshipController.list = (req, res) => {
    Internship.find()
    .then((internship) => {
        res.json(internship)
    })
    .catch((internship) => {
        res.json(internship)
    })
}

// Show Resume
internshipController.show = (req, res) => {
    Internship.find({user: req.user._id})   
    .then((internship) => {
        res.json(internship)
    })
    .catch((err) => {
        res.json(err)
    })
}

// Updata internship Profile
internshipController.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Internship.findOneAndUpdate({ _id: id}, { $set: body}, { new: true, runValidators: true })
        .then((internship) => {
            res.json(internship)
        })
        .catch((internship) => {
            res.json(internship)
        })
}

// DElete internship profile
internshipController.destroy = (req, res) => {
    const id = req.params.id
    Internship.findByIdAndDelete(id)
    .then((internship) => {
        res.json(internship)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports = internshipController