const router = require('express').Router()
const studentRoutes = require('./userRoutes')
const courseRoutes = require('./thoughtRoutes')

router.use('/users', userRoutes)
router.use('/thoughts', courseRoutes)

module.exports = router
