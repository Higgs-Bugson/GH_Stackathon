// import { MemoryRouter } from '../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';

const User = require('./user')
const Activities = require('./activities')
const Membership = require('./membership')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */


Activities.belongsToMany(User, { through: Membership });
User.belongsToMany(Activities, { through: Membership });
Activities.hasMany(Membership)
User.hasMany(Membership)


// Activities.belongsToMany(User, { as: 'group', through: Membership, foreignKey: 'activityId' });
// User.belongsToMany(Activities, { as: 'indiv', through: Membership, foreignKey: 'userId' });

module.exports = {
  User,
  Activities,
  Membership
}
