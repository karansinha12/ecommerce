const express = require('express');
const { signup, signin, requiresignin } = require('../controllers/auth');
const router = express.Router();






router.post('/signin', signin)

router.post('/signup', signup)

// router.post('/profile',requiresignin , (req, res) => {
//     res.json({"user": "profile"})
// })

module.exports = router