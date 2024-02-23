const { DataTypes } = require("sequelize")

module.exports= (sequelize) => {
    sequelize.define("url", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        URL: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        choppedURL: {
            type: DataTypes.STRING(8), 
            unique: true, 
            validate: {
                is: /^[a-zA-Z0-9]+$/,
            }
        }
    })
}
