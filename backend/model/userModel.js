const mongoose = require('mongoose');

// user model
const UserSchema = new mongoose.Schema({ 
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum: ['teacher', 'student','admin'],  
    },
    batch:{
        type: String,
        enum: ['The Uniques', 'academics', 'Super60'],
    }
})

module.exports = mongoose.model('User', UserSchema);