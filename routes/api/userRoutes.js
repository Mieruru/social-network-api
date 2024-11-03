// import router
const router = require('express').Router()

// import user Controller
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController')

// users API
router.route('/').get(getUsers).post(createUser)

// single user API
router.route('/:userID').get(getUser).put(updateUser).delete(deleteUser)

// user friend API
router.route('/:userID/friends/:friendID').post(addFriend).delete(removeFriend)

// export user router
module.exports = router