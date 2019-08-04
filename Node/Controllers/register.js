const express = require('express');
const User = require('../models/user')
const upload = require('./addImage')

module.exports = {
    registerUser : (req, res) =>  {
        let imagePath= '';
        User.findOne({ email: req.body.email }, function(err, email) {
            if(err) {
                console.log(err)
                res.json(err)
            }
            else if (email) {
                 res.status(400);
                 res.json('Email Already exists');
            } else {
                upload(req, res, function (err){
                    if(err) res.json(err)
                    else {
                      imagePath = req.body.profile
                      console.log(req.body)
                  }
                })
                let user = new User({    
                    email: req.body.email,
                    password: req.body.password,
                    profile:imagePath
               })
                user.save(function(err, user){
                    console.log('user', user)
                   if(err){
                      res.json(err);
                   } else{
                       res.json(req.body);
                   }
               })
            }
         }); 
    }
}
