const {user} = require("../../../db")
const bcrypt = require('bcrypt');

const findUser = async (email, password) => {
    let userFound = await user.findOne({ where: { email } });

    if (!userFound) {
      throw new Error("Usuario no encontrado");
    }

    let isPasswordMatch = bcrypt.compareSync(password, userFound.password);

    if (!isPasswordMatch) {
      throw new Error("Contraseña incorrecta");
    }

    return userFound;
  };

module.exports = {findUser}