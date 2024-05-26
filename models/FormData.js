const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../db/connection");

const FormData = sequelize.define('FormData', {
    uniqueId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isGraduate: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    formTitle: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = FormData;
