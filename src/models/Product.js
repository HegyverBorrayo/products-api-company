module.exports = (sequelize, type) => {
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
}