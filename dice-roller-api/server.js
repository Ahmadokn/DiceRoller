const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use('/api/roll', cors());
app.use('/api/wakeup', cors());


// Roll the Dice
app.get('/api/roll', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1;
  res.json({ result });
});

// Wake-Up Call
app.get('/api/wakeup', (req, res) => {
  res.send('Server is awake!');
});

//  No CORS 
app.get('/api/no-cors', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1;
  res.json({ result });
});
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Dice Roller API is running on port ${port}`);
});