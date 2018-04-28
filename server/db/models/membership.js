const Sequelize = require('sequelize');
const db = require('../db.js');

const Membership = db.define('membership', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    deadline: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

module.exports = Membership