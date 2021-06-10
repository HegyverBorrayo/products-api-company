import {Product} from '../database/database'

export const createProduct = async(req, res) => {
    const product = await Product.create(req.body)
    res.json(product)
}

export const getProducts = async (req, res) => {
    const products = await Product.findAll()
    res.json(products)
}

export const getProductById = (req, res) => {
    
}

export const updateProductById = (req, res) => {
    
}

export const deleteProductById = (req, res) => {
    
}