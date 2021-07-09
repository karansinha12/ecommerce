const express = require('express');
const { adminMiddleware, requiresignin } = require('../common-middleware');
const router = express.Router();

const { addCategory, getCategories } = require('../controllers/category');


router.post('/category/create', requiresignin, adminMiddleware, addCategory)
router.get('/category/getCategories', getCategories)


module.exports = router;