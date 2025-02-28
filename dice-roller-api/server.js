// // dice-roller-api/server.js
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// // --- Endpoint: Roll the Dice ---
// // Returns a random number between 1 and 6.
// app.get('/api/roll', (req, res) => {
//   const result = Math.floor(Math.random() * 6) + 1;
//   res.json({ result });
// });

// // --- Endpoint: Wake-Up Call ---
// // Used to "wake up" the server.
// app.get('/api/wakeup', (req, res) => {
//   res.send('Server is awake!');
// });

// // --- Endpoint: No CORS ---
// // This endpoint intentionally does not set CORS headers to demonstrate a failure.
// app.get('/api/no-cors', (req, res) => {
//   const result = Math.floor(Math.random() * 6) + 1;
//   res.json({ result });
// });

// // --- Serve the Test HTML ---
// // index.html is used only for testing the API endpoints.
// app.use(express.static('public'));

// app.listen(port, () => {
//   console.log(`Dice Roller API is running on port ${port}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for endpoints that should allow cross-origin requests.
app.use('/api/roll', cors());
app.use('/api/wakeup', cors());
// Do not enable CORS on /api/no-cors to demonstrate the failure.

// Your endpoints...
app.get('/api/roll', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1;
  res.json({ result });
});

app.get('/api/wakeup', (req, res) => {
  res.send('Server is awake!');
});

app.get('/api/no-cors', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Dice Roller API is running on port ${port}`);
});