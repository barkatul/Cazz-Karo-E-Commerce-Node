const productService = require("../services/product.service.js")

const createProduct = async (req,res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deleteProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        const product = await productService.deleteProduct(productId);
        return res.status(201).json({product});
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const updateProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        const product = await productService.updateProduct(productId,req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const findProductById = async (req,res) => {
    try {
        const productId = req.params.id;
        const product = await productService.findProductById(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAllProducts = async (req,res) => {
    const productId = req.params.id;
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const createMultipleProduct = async (req,res) => {
    const productId = req.params.id;
    try {
        const products = await productService.createMultipleProduct(req.body);
        return res.status(201).json({message:"Products Created Successfully"});
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

async function searchProduct(req, res) {
    try {
        const query = req.params.query;
        const products = await productService.searchProduct(query);
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

async function findProductByCategory(req, res){
    try {
        const category = req.params.category;
        const products = await productService.findProductByCategory(category);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    createMultipleProduct,
    findProductById,
    searchProduct,
    findProductByCategory
}