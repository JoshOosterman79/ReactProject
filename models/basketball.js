

//**SN: Joshua Oosterman */


const mongoose = require('mongoose');

const basketballSchema = new mongoose.Schema({
  playerid: Number,
  fname: String,
  lname: String,
  position: String,
  image: String
});

const Basketball = mongoose.model('Basketball', basketballSchema);

module.exports = Basketball;

// for whatever reason, within the basketballs json file images does not appear
