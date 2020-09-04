const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema ({
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
    fresher: {
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
    salary: {
        type: String,
        required: [true, 'salary is required']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    }
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company