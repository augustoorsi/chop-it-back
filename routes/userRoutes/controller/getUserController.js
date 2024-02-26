const {user} = require("../../../db")

const findUser = async (email, password) => {
    const userFound = await user.findOne({ where: { email } });

    if (!userFound) {
      throw new Error("Usuario no encontrado");
    }

    const isPasswordMatch = bcrypt.compareSync(password, userFound.password);

    if (!isPasswordMatch) {
      throw new Error("Contraseña incorrecta");
    }

    return userFound;
  };

module.exports = {findUser}