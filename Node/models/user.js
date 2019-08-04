const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    email : {
        type: String,
        required:  true,
    },
    password : {
       type: String,
       required: true,
    },
    profile:{
        type: String,
    },
    blogs: {
        type: Array,
    },
})

const User = mongoose.model('user', userSchema)
module.exports = User;