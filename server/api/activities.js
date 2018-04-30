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

//users needed for the membership
router.get('/users/member/:activityId', (req, res, next) => {
    User.findAll({
        include: [{ model: Membership, where: { activityId: req.params.activityId } }]
    })
        .then(activity => res.json(activity))
        .catch(next)
})

//membership
router.get('/users/member/membership/:activityId', (req, res, next) => {
    Membership.findAll({
        where: { activityId: req.params.activityId }
    })
        .then(activity => res.json(activity))
        .catch(next)
})