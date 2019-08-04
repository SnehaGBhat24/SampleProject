const express = require('express');
const router =  express.Router()
const registerCntrl = require('../Controllers/register');
const loginCntrl = require('../Controllers/login');
const addblogCntrl = require('../Controllers/addBlog')
const addreplyCntrl = require('../Controllers/addReply')

router.post('/register', registerCntrl.registerUser)
router.post('/login', loginCntrl.login)
router.post('/addblog', addblogCntrl.addBlog)
router.post('/addreply', addreplyCntrl.addReply)

module.exports = router;
