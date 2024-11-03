// import models
const { User, Thought } = require('../models')

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // get a single user by ID
  async getUser(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // create new user
  async createUser(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // update user by ID
  async updateUser(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // update user by ID
  async deleteUser(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // add friend by ID
  async addFriend(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // remove friend by ID
  async removeFriend(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}