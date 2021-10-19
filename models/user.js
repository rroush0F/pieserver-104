const { DataTypes } = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING(100), //! limited to 100 characters
        allowNull: false,
        unique: true //! makes it so you can't use same email more than once
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User