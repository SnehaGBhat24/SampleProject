const mongoose = require('mongoose');

blogSchema = mongoose.Schema({
    email : { type : String } ,  
    blog: { type: String } , 
    replyforblog : { type: Array }
})

const Blogs = mongoose.model('Blogs', blogSchema)
module.exports = Blogs;