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
  sequelize.define('usuario', {
    name: {
      type: DataTypes.STRING,
      allowNull: validations.allowNull,
      validate: validations.strType,
    },
    role:{
     type:DataTypes.STRING,
     defaultValue:'Client',
     allowNull: validations.allowNull,
     validate: validations.strType,
    },
    email:{
      type:DataTypes.STRING,
      allowNull: validations.allowNull,
      validate: validations.strType,
      unique:true,
      validate:{
        isEmail:true
      },
      password:{
        type:DataTypes.STRING,
        allowNull: validations.allowNull,
        validate: validations.intType,
      }
    }
    
  });
};