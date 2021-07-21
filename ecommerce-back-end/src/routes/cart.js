const express = require('express');
const { userMiddleware, requiresignin } = require('../common-middleware');
const router = express.Router();

const { addItemToCart } = require('../controllers/cart');


router.post('/user/cart/addtocart', requiresignin, userMiddleware, addItemToCart);



module.exports = router;