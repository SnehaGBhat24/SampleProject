const express = require('express');
const Blogs = require('../models/blogs')

module.exports = {
    addBlog : (req, res) =>  {
       let blogs = new Blogs ({
           email: req.body.email,
           blog : req.body.blogs,
       })
       blogs.save(function(err, blog){
        if(err){
           res.json('Error While updating');
        } else{
            console.log('blogs', blogs)
            res.json(blogs);
        }
    })
    }
}