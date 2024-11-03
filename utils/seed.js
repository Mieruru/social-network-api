const connection = require('../config/connection')
const { User, Thought } = require('../models')
const {
  getRandomArrItem,
  getRandomName,
  getRandomUserName,
  getRandomThought,
  getRandomReactions
} = require('./seedData')

// catch connection errors
connection.on('error', (err) => err)

// functions to run on connection establish
connection.once('open', async () => {
  console.log('Connected to database.')

  // delete collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray()
  if (userCheck.length) {
    await connection.dropCollection('users')
  }

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray()
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts')
  }

  // create empty array to hold users
  const users = []

  // add users to users array -- loop 20 times
  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName()
    const first = fullName.split(' ')[0]
    const last = fullName.split(' ')[1]

  }

  // add users to collection and await results


  // add thoughts to collection and await results

  // log seed data to console
  console.table(users)
  console.table(thoughts)
  console.info('Seeding complete! 🌱')
  process.exit(0)
})