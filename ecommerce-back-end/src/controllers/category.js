const slugify = require('slugify');
const Category = require('../models/category')

exports.addCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save((err, category) => {
        if(err){
            return res.status(400).json({err: err});
        }
        if(category){
            return res.status(201).json({category});
        }
    })
}


exports.getCategories = (req, res) => {
    Category.find({})
    .exec((err, categories) => {
        if(err){
            return res.status(400).json({err})
        }
        if(categories){
            const categoryList = createCategories(categories);
            return res.status(201).json({categoryList})
        }
    })
}

const createCategories = (categories, parentId=null) => {
    const categoryList = [];
    if(parentId == null){
        categories.filter((cat) => {
            cat.parentId == undefined;
        })
    }
    else{
        categories.filter((cat) => { cat.parentId == parentId })
    }

    for(let cat of categories){
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            children: createCategories(categories, cat._id)
        })
    }
}