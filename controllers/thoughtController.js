// import models
const { User, Thought } = require('../models')

module.exports = {
  // get all users
  async getThoughts(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // get a single user by ID
  async getThought(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // create new user
  async createThought(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // update user by ID
  async updateThought(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // update user by ID
  async deleteThought(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // add friend by ID
  async addReaction(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // remove friend by ID
  async removeReaction(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}