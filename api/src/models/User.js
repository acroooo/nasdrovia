const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role:{
      type:DataTypes.ENUM(['registrado','no registrado','admin'])
    },
    email:{
      type:DataTypes.STRING,
      alowNull:false,
      unique:true,
      validate:{
        isEmail:true
      },
     
      password:{
        type:DataTypes.STRING,
        alowNull:false,
      }
    }
    
  });
};