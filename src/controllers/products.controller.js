import ModelProduct from '../models/Product'

export const createProduct = async(req, res) => {
    const { name, category, price, imageUrl } = req.body
    const newProduct = new ModelProduct({name, category, price, imageUrl})

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await ModelProduct.findAll()
    res.json(products)
}

export const getProductById = async(req, res) => {
    const product = await ModelProduct.findByPk(req.params.productId)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({error: "Product not found"})
    }
}

export const updateProductById = async(req, res) => {
    const { name, category, price, imageUrl } = req.body;
    const { productId } = req.params
    
    const product = await ModelProduct.findByPk(productId)

    if (product) {
        product.name = name || product.name;
        product.category = category || product.category;
        product.price = price || product.price;
        product.imageUrl = imageUrl || product.imageUrl;

        await ModelProduct.update(
            {
                name: product.name,
                category: product.category,
                price: product.price,
                imageUrl: product.imageUrl
            },
            {
                where: {
                    id: product.id
                }
            }
        ).then(count => {
            console.log('Rows updated ' + count);
        }).catch((error) => {
            console.log('Updated error' + error)
            res.status(404)
            throw new Error("Error updated")
        });

        const updatedProduct = await ModelProduct.findByPk(productId)
        
        res.json(updatedProduct)
    } else {
        res.status(404).json({error: "Product not found"})
    }
}

export const deleteProductById = async(req, res) => {
    const { productId } = req.params
    const product = await ModelProduct.findByPk(productId)

    if (product) {
        await ModelProduct.destroy({ where: { id: productId}})
        res.status(204).json()
    } else {
        res.status(404).json({error: "Product not found"})
    }
}