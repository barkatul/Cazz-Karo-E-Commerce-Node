const ratingService = require("../services/rating.service.js");

const createRating = async(req, res) => {
    try {
        const user = await req.user;
        const review = await ratingService.createRating(req.body,user);
        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const getAllRatings = async(req, res) => {
    const user = await req.user;
    const productId = req.params.productId;
    try {
        const reviews = await ratingService.getAllRatings(productId);
        return res.status(201).send(reviews);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const getProductsRating = async (req, res) => {
    try {
        const productId = req.params.productId;
        const ratings = await ratingService.getProductsRating(productId);
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}


module.exports={
    createRating,
    getAllRatings,
    getProductsRating
}