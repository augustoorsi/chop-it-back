const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Asegura que el correo electrónico sea único
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email address", // Mensaje de error personalizado si el correo electrónico no es válido
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        // Hash y salting de la contraseña antes de guardarla
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(value, salt);
        this.setDataValue("password", hashedPassword);
        this.setDataValue("salt", salt);
      },
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

