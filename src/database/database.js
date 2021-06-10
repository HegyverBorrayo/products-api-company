import { Sequelize, Model, DataTypes } from 'sequelize'

import { sequelizedb, sequelizehd } from './keys'

const producModel = require('../models/Product')

const sequelize = new Sequelize(sequelizedb.database, sequelizedb.user, sequelizedb.password , sequelizehd);

const Product = producModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => {
        console.log("Tablas sincornizadas")
    })

module.exports = {
    Product
}