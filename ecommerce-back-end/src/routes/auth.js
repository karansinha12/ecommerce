const express = require('express');
const { signup, signin, requiresignin } = require('../controllers/auth');
const { validateSignupRequest,validateSigninRequest, isValidated } = require('../validator/auth');

const router = express.Router();






router.post('/signin',validateSigninRequest,isValidated, signin)

router.post('/signup',validateSignupRequest, isValidated, signup)

// router.post('/profile',requiresignin , (req, res) => {
//     res.json({"user": "profile"})
// })

module.exports = router