const express = require('express');
const User = require('../models/user')

module.exports = {
    login : (req, res) =>  {
      User.findOne(
        {email: req.body.email ,password: req.body.password}, function(err, user) {
          if(err) {
              res.json('Something went wrong');
          }
          if(user){
            res.json(user)
          }
         else  {
            res.status(400)
            res.json('Email or Password Incorrect')
         }
      })
    }
}