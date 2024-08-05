

//**SN: Joshua Oosterman */


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Basketball = require('./models/basketball');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());


mongoose.connect('mongodb://localhost:27017/playersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});


app.use('/img', express.static(path.join(__dirname, 'data/img'))); 



app.get('/basketballs', async (req, res) => {
  try {
    // const count = await Basketball.countDocuments();
    // const random = Math.floor(Math.random() * (count - 30 + 1)); 

    const basketballs = await Basketball.find();
    //.skip(random).limit(50);
    res.json(basketballs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});




// app.post('/basketballs', async (req, res) => {
//   const { playerid, fname, lname } = req.body;
//   const newBasketball = new Basketball({ playerid, fname, lname, position, image });

//   try {
//     const savedBasketball = await newBasketball.save();
//     res.status(201).json(savedBasketball);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// app.delete('/basketballs', async (req, res) => {
//   try {
//     await Basketball.deleteMany({});
//     res.status(204).send();
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

