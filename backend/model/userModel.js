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
        enum: ['teacher', 'co-ordinator','admin'],
        
    }
})

module.exports = mongoose.model('User', UserSchema);