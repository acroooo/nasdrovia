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
    name: {
      type: DataTypes.STRING,
      allowNull: validations.allowNull,
      validate: validations.strType,
    },
    role: {
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
      },
      password: {
        type: DataTypes.STRING,
        allowNull: validations.allowNull,
        set(value) {
          const rSalt = Usuario.randomSalt();
          this.setDataValue("salt", rSalt);
          this.setDataValue(
            "password",
            crypto
            .createHmac("sha1", this.salt)
            .update(value)
            .digest("hex")
          );
        },
      },
      salt: {
        type: DataTypes.STRING,
      },
    },
  });
};
