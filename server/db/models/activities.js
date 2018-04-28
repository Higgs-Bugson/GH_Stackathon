const Sequelize = require('sequelize');
const db = require('../db.js');

const Activities = db.define('activity', {

    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'http://i66.tinypic.com/2iut2l0.jpg',
        validate: {
            isUrl: true
        }
    }
})

module.exports = Activities