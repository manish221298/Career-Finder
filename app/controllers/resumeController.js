const Resume = require('../models/resume')
const resumeController = {}

// Create Resume
resumeController.create = (req, res) => {
    const body = req.body
    const resume = new Resume(body)

    // resume.findOne ({email:body.email})
    // .then( resume =>{
    //     if( resume ) {
    //         res.json({error:'Email already registered'})
    //     }
    // })
    
    resume.user = req.user._id

    resume.save()
    .then((resume) => {
        res.json(resume)
    })
    .catch((err) => {
        res.json(err)
    })
}

// Show Resume
resumeController.list = (req, res) => {
    Resume.find({user: req.user._id})   
    .then((resume) => {
        res.json(resume)
    })
    .catch((err) => {
        res.json(err)
    })
}

// Show Resume for Admin side
resumeController.show = (req, res) => {
    Resume.find()
    .then((resume) => {
        res.json(resume)
    })
    .catch((err) => {
        res.json(err)
    })
}

// Show Resume by id
// resumeController.show = (req, res) => {
//     const id = req.params.id
//     Resume.findOne({_id: id, user: req.user._id})
//     .then((resume) => {
//         res.json(resume)
//     })
//     .catch((err) => {
//         res.json(err)
//     })
// }

// Update Resume by id
resumeController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Resume.findByIdAndUpdate({_id: id, user: req.user._id}, { $set: body }, {new: true, runValidators: true})
    .then((resume) => {
        res.json(resume)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports = resumeController
