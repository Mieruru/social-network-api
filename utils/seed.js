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
    const username = getRandomUserName()
    const email = `${username}@socmedapp.com`

    // generate user objects and push to array
    users.push({
      username,
      email,
      thoughts: [],
      friends: []
    })
  }

  // add users to collection and await results
  const userData = await User.create(users)

  // create empty array to hold thoughts
  const thoughts = []

  // add thoughts to thoughts array -- loop 20 times
  for (let i = 0; i < 20; i++) {
    // pull thought from array
    const thoughtText = getRandomThought()
    // pull valid username from array
    const username = getRandomArrItem(users).username
    // pull 3 reactions
    const reactions = getRandomReactions(3)

    // generate thought objects and push to array
    thoughts.push({
      thoughtText,
      createdAt: new Date(),
      username,
      reactions
    })
  }

  // add thoughts to collection and await results
  await Thought.create(thoughts)

  // log seed data to console
  console.table(users)
  console.table(thoughts)
  console.info('Seeding complete! 🌱')
  process.exit(0)
})