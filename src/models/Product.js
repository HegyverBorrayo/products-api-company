/*module.exports = (sequelize, type) => {
    return sequelize.define('Product',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        category: type.STRING,
        price: type.DOUBLE,
        imageUrl: type.STRING,
        timestamps: {
            type: type.DATE,
            defaultValue: type.NOW
        }
    });
}*/

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