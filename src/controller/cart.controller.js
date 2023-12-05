const cartService = require("../services/cart.service.js");

const findUserCart = async(req,res)=>{
    try {
        const user = req.user;
        const cart = await cartService.findUserCart(user._id);
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

const addItemToCart = async(req,res)=>{
    try {
        const user = req.user;
        const cartItem = await cartService.addCartItem(user._id.toString(),req.body);
        return res.status(200).send(cartItem);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports={
    findUserCart,
    addItemToCart
}

