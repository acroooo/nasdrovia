const { DataTypes, Sequelize } = require("sequelize");
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
  sequelize.define("usuario", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: validations.allowNull,
      validate: validations.strType,
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: "Client",
      allowNull: validations.allowNull,
      validate: validations.strType,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: validations.allowNull,
      validate: validations.strType,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING,
      get() {
          return () => this.getDataValue('password')
      }
  },
     salt: {
       type: DataTypes.STRING,
       get(){
        return ()=>this.getDataValue('salt')
      }
     },
    });
}
