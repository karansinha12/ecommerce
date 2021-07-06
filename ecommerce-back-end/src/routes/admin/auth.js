const express = require('express');
const { signup, signin, requiresignin } = require('../../controllers/admin/auth');
const { validateSigninRequest,validateSignupRequest, isValidated } = require('../../validator/auth');
const router = express.Router();






router.post('/admin/signin',validateSigninRequest,isValidated, signin)

router.post('/admin/signup',validateSignupRequest, isValidated, signup)



module.exports = router