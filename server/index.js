const express = require('express');
const connectDb = require('./db');
const itemModel = require('./models/item');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Use body-parser to handle large payloads
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Enable CORS for your frontend origin
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:5174', 'http://localhost:3000'];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Connect to the database
connectDb();

// Route to fetch all items
app.get('/', async (req, res) => {
  try {
    const response = await itemModel.find();
    return res.json({ items: response });
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching items' });
  }
});



// Start the server
app.listen(3333, () => {
  console.log("App is running on port 3333");
});
