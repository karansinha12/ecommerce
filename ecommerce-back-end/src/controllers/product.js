const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify');


exports.createProduct = (req, res) => {

    const { name, price, description,quantity, category, createdBy  } = req.body;
    let productPictures = [];
    if(req.files.length > 0){
        productPictures = req.files.map((file) => {
            return {img: file.filename}
        })
    }
    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createdBy: req.user._id
    })
    product.save((err, data) => {
        if(err){
            return res.status(400).json({err})
        }
        if(data){
            res.status(201).json({data})
        }
    });
    
}