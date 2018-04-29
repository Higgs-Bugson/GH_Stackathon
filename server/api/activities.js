const router = require('express').Router()
const { Activities, Membership, User } = require('../db/models')
module.exports = router;

//Get all activities
router.get('/', (req, res, next) => {
    Activities.findAll()
        .then(activity => res.json(activity))
        .catch(next)
})

//Get all activities by user
router.get('/:userId', (req, res, next) => {
    Activities.findAll({
        include: [{ model: Membership, where: { userId: req.params.userId } }]
    })
        .then(activity => res.json(activity))
        .catch(next)
})

router.get('/:userId/:activityId', (req, res, next) => {
    Activities.findAll({
        include: [{ model: Membership, where: { userId: req.params.userId, activityId: req.params.activityId } }]
    })
        .then(activity => res.json(activity))
        .catch(next)
})