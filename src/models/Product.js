import { Sequelize } from 'sequelize'
import sequelize from '../database/database'

const ModelProduct = sequelize.define('Product',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        category: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        imageUrl: Sequelize.STRING,
        timestamps: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }
);

export default ModelProduct;