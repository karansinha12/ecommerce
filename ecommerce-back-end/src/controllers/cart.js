const Cart = require('../models/cart')

exports.addItemToCart = (req, res) => {
    // res.send('hello')

    Cart.findOne({user: req.user._id})
    .exec((error, cartData) => {
        if(error){
            return res.status(400).json({err})
        }

        if(cartData){
            Cart.findOneAndUpdate({user: req.user._id}, 
                {"$push": {
                    "cartItems" : req.body.cartItems
                }}).exec((error, _cart) => {
                    if(error){
                        return res.status(400).json({error})
                    }
                    if(_cart){
                        return res.status(201).json({cart: _cart})
                    }
                })
        }
        else{
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            });
            cart.save((err, cart) =>{
                if(err){
                    return res.status(400).json({error: err});
                }
                if(cart){
                    return res.status(201).json({cart})
                }
            })
        }
    })

    
}