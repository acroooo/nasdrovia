const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('producto', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isString(value){
          if(typeof value !== 'string') throw new Error('Error: debe ser una String');
        }
      }
    },
    precio:{
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isString(value){
          if(typeof value !== 'string') throw new Error('Error: debe ser una String');
        }
      }
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isString(value){
          if(typeof value !== 'string') throw new Error('Error: debe ser una String');
        }
      }
    }

  });
};
