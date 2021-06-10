import dotenv from 'dotenv'
const env = dotenv.config()

module.exports = {
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    sequelizedb : {
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
    },
    sequelizehd: {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
}