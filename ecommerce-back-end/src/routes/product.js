const express = require('express');
const router = express.Router();
const { requiresignin, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controllers/product');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: (req, file, cb) =>{
        cb(null, shortid.generate() + "-" + file.originalname);
    }
})


const upload = multer({storage})



router.post('/product/create', requiresignin, adminMiddleware,upload.single('productPicture'), createProduct)


module.exports = router;