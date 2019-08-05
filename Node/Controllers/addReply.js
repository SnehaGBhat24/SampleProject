const express = require('express');
const Blogs = require('../models/blogs')

module.exports = {
    addReply : (req, res) =>  {
        Blogs.findOneAndUpdate(
            {_id: req.body._id},
            { $push: { replyforblog: req.body.reply } },
            function(err, updatedUser){
                if(err){
                    console.log(err)
                    res.status(400)
                    res.json('Error While updating')
                } else {
                    res.json(updatedUser)
                }
            })
    }
}