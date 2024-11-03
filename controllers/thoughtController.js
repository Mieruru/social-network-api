// import models
const { User, Thought } = require('../models')

module.exports = {
  // get all thoughts
  async getThoughts(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // get a single thought by ID
  async getThought(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // create new thought
  async createThought(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // update thought by ID
  async updateThought(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // update thought by ID
  async deleteThought(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // add reaction by ID
  async addReaction(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  // remove reaction by ID
  async removeReaction(req, res) {
    try {

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}