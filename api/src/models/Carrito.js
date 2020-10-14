const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//El carrito está en estado inicial en proceso

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
    sequelize.define('carrito', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: validations.allowNull,
        },
        codigoPostal: {
            type: DataTypes.INTEGER,
            validate: validations.intType,
        },
        telefono: {
            type: DataTypes.INTEGER,
            validate: validations.intType,
        },
        tipoEnvio: {
            type: DataTypes.STRING,
        allowNull: validations.allowNull,
        },
        estado:{
            type:DataTypes.STRING,
            allowNull: validations.allowNull,
            defaultValue:'En proceso'
        },
        
    });
};