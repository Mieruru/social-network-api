// user seed table
// name list borrowed from module 18 mini project
const users = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
]

// thought seed table
const thoughts = [
  'Sample thought 01',
  'Sample thought 02',
  'Sample thought 03',
  'Sample thought 04',
  'Sample thought 05',
  'Sample thought 06',
  'Sample thought 07',
  'Sample thought 08',
  'Sample thought 09',
  'Sample thought 10',
  'Sample thought 11',
  'Sample thought 12',
  'Sample thought 13',
  'Sample thought 14',
  'Sample thought 15',
  'Sample thought 16',
  'Sample thought 17',
  'Sample thought 18',
  'Sample thought 19',
  'Sample thought 20',
]

// reaction seed table
const reactions = [
  'Sample reaction 01',
  'Sample reaction 02',
  'Sample reaction 03',
  'Sample reaction 04',
  'Sample reaction 05',
  'Sample reaction 06',
  'Sample reaction 07',
  'Sample reaction 08',
  'Sample reaction 09',
  'Sample reaction 10',
  'Sample reaction 11',
  'Sample reaction 12',
  'Sample reaction 13',
  'Sample reaction 14',
  'Sample reaction 15',
  'Sample reaction 16',
  'Sample reaction 17',
  'Sample reaction 18',
  'Sample reaction 19',
  'Sample reaction 20',
]

// get random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

// get a random full name
const getRandomName = () => `${getRandomArrItem(users)} ${getRandomArrItem(users)}`

// get a random username
const getRandomUserName = () => getRandomArrItem(users).toLowerCase() + Math.floor(Math.random() * 100)

// get a random thought
const getRandomThought = () => getRandomArrItem(thoughts)

// get a randoom set of reactions
const getRandomReactionSet = () => getRandomArrItem(reactions)

// populate an array of reactions
const getRandomReactions = (num) => {
  const reactions = []
  for (let i = 0; i < num; i++) {
    reactions.push({
      reactionBody: getRandomReactionSet(),
      username: getRandomUserName(),
      createdAt: new Date()
    })
  }
  return reactions
}

module.exports = {
  getRandomArrItem,
  getRandomName,
  getRandomUserName,
  getRandomThought,
  getRandomReactions
}
