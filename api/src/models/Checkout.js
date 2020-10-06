const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    const validations = {
        allowNull: false,
        strType: {
          isString(value) {
            if (typeof value !== "string")
              throw new Error("Error: debe ser una String");
          },
        },
        intType: {
          isNumeric: true,
        },
      };
      
    // defino el modelo
    sequelize.define('checkout', {
        name: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        direction: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        postalCode: {
            type: DataTypes.INTEGER,
            validate: validations.intType,
        },
        phone: {
            type: DataTypes.INTEGER,
            validate: validations.intType,
        },
        //tipo de envio
        shipping: {
            type: DataTypes.STRING,
        allowNull: validations.allowNull,
        },
    });
};