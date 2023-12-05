const CartItem = require("../models/cartItem.model.js");
const userService = require("../services/user.service.js");

async function createCartItem(cartItemData) {
        const cartItem = new CartItem(cartItemData);
        cartItem.quantity = 1;
        cartItem.price = cartItem.product.price * cartItem.quantity;
        cartItem.discountedPrice = cartItem.product.discountedPrice * cartItem.quantity;

        const createdCartItem = await cartItem.save();
        return createdCartItem;
}

async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId);

        if (!item) {
            throw new Error("cart item not found: ", cartItemId)
        }

        const user = await userService.findUserById(item.userId);

        if (!user) {
            throw new Error("user not found : ", userId)
        }

        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else {
            throw new Error("you can't update this cart item")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

async function isCartItemExist(cart, product, size, userId) {
    const cartItem = await cartItem.findOne({ cart, product, size, userId});
    return cartItem;
}
async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(cartItem.userId);
    const reqUser = await userService.findUserById(userId);

    if (user._id.toString() === reqUser.id.toString()) {
        return await cartItem.findByIdAndDelete(cartItem.id)
    }
    throw new Error("You can't remove another user's item")
}

async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product");

    if (cartItem)
        return cartItem;

    else
        throw new Error("cartItem not found with id ", cartItemId)
}

module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById,
    createCartItem,
    isCartItemExist,
}