const mongoose = require('mongoose')
const Schema = mongoose.Schema
const isEmail = require('validator/lib/isEmail')


const resumeSchema = new Schema ({

            name: {
                type: String,
                required: true,
                maxlength: 50
            },
            email: {
                type: String,
                required: true,
                unique: true, 
                validate: {
                    validator: function(value){
                        return isEmail(value)
                    },
                    message: function(){
                        return 'invalid email format'
                    }
                }
            },
            mobileNumber: {
                type: Number,
                required: true,
                minlength: 10,
                maxlength: 13,
            },
            currentCity: {
                type: String,
                required: true,
            },

        seniorSecondary: {
            college: {
                type: String,
                required: true
            },
            board: {
                type: String,
                required: true
            },
            passingYear: {
                type: Number,
                required: true
            },
            grade: {
                type: String,
                required: true
            }
        },

        graduation: {
            institution: {
                type: String,
                required: true
            },
            university: {
                type: String,
                required: true
            },
            yearOfCompletion: {
                type: Number,
                required: true
            },
            performance: {
                type: String,
                required: true
            }
        },

    skills: [String],
    experience: {
        type: String,
        required: true
    },
    projects:  {
            title: {
                type: String,
                required: true
            },
            startDate: {
                type: Date,
                required: true
            },
            endDate: {
                type: Date,
                required: true
            },
            link: {
                type: String,
                required: true
            }
        },
    user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }

})

const Resume = mongoose.model('Resume', resumeSchema)
module.exports = Resume