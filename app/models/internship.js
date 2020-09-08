const mongoose = require('mongoose')
const Schema = mongoose.Schema

const internshipSchema = new Schema ({
    position: {
        type: String,
        required: [true, 'position is required']
    },
    name: {
        type: String,
        required: [true, 'company name is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    requiredSkills: [String],
    internship: {
        type: String,
        required: true
    },
    appliedBy: {
        type: Date,
        required: true
    },
    numberOfOpening: {
        type: Number,
        required: true  
    },
    stipend: {
        type: String,
        required: [true, 'salary is required']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    }
})

const Internship = mongoose.model('Internship', internshipSchema)

module.exports = Internship