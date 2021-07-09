const express = require('express');
const router = express.Router();
const { requiresignin, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controllers/product');
const multer = require('multer');
const upload = multer({dest: 'uploads/'})



router.post('/product/create', requiresignin, adminMiddleware,upload.single('productPicture'), createProduct)


module.exports = router;