const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('reviews', {
    commentary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    qualification:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
  });
};