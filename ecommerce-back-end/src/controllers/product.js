const Product = require('../models/product');
const shortid = require('shortid')


exports.createProduct = (req, res) => {

    // const {  } = req.body;
    res.status(200).json({file: req.file, body: req.body})
}