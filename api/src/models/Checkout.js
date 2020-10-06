const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('checkout', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        //tipo de envio
        shipping: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paymentMethod: {
            type: DataTypes.ENUM(['efectivo', 'tarjeta']),
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },






    });
};