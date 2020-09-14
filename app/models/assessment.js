const mongoose = require('mongoose')
const Schema = mongoose.Schema


const assessmentSchema = new Schema({
    assessment1: {
        type: String,
        required: true
    },
    assessment2: {
        type: String,
        required: true
    },
    companyName: {
	type: String,
	//required: true
    },
    internshipName: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Assessment = mongoose.model('Assessment', assessmentSchema)

module.exports = Assessment
