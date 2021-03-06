const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    cartItems:[
        {
            product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
            quantity: {default: 1, type: Number},
            price: { type: Number, required: true}
        }
    ]

}, {timestamps: true});



module.exports = mongoose.model('Cart', cartSchema);