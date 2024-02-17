const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    password: {
        type:String,
        required: true
    },
    email: {
        type:String,
        default: Date.now
    },

    number: {
        type:String,
        required: true
    },

    friends: [{
        type: Schema.Types.ObjectId, // Reference to another User
        ref: 'user' 
    }]
}, {timestamps: true})

const user = mongoose.model('user',userSchema)
module.exports = user