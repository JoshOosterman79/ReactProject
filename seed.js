

//**SN: Joshua Oosterman */


const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Basketball = require('./models/basketball');
const Player = require('./models/players');

mongoose.connect("mongodb://localhost:27017/PlayerDB", {
  useNewUrlParser: true,
}).then(async () => {
  console.log('Connected to MongoDB');


  const filePath = path.join(__dirname, './data/nbaplayers.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));


  await Basketball.deleteMany({}); // ensures clearing of any data just in case 
 
  await Basketball.insertMany(data);



  console.log('Database seeded');
  mongoose.disconnect();
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});


