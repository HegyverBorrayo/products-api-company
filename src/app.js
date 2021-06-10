import express from 'express'
import morgan from 'morgan'

//Importar package.json
import pkg from '../package.json'

//Importar modelos
import productsRoutes from './routes/products.routes'

const app = express()

app.set('pkg', pkg)

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})
 
app.use('/products', productsRoutes)

export default app;