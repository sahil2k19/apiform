const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");


const Form = sequelize.define('Form', {
    uniqueId: {
        type: DataTypes.STRING,
        defaultValue: "uuid"
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"string"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"email"
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isGraduate: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"boolean"
    }
}, {
    timestamps:true
}
)

module.exports = Form