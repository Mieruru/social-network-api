// import router
const router = require('express').Router()

// import routes for users and thoughts
const userRoutes = require('./userRoutes')
const thoughtRoutes = require('./thoughtRoutes')

// define use routes
router.use('/users', userRoutes)
router.use('/thoughts', thoughtRoutes)

// export configured router
module.exports = router
