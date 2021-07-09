const express = require('express');
const { signup, signin } = require('../controllers/auth');
const { validateSignupRequest,validateSigninRequest, isValidated } = require('../validator/auth');

const router = express.Router();






router.post('/signin',validateSigninRequest,isValidated, signin)

router.post('/signup',validateSignupRequest, isValidated, signup)


module.exports = router