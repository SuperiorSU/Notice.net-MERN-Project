const mongoose = require('mongoose');
const noticeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    batch:{
        type:String,
        required:true,
        enum:["Super60", "The Uniques"],
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model("Notice",noticeSchema);