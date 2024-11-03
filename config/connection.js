// import connect and connection modules from mongoose
const { connect, connection } = require('mongoose')

// local database connection
const connectionString = 'mongodb://127.0.0.1:27017/social_DB'

// connect to database
connect(connectionString)

// export connection module
module.exports = connection
