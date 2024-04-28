const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// Middlewares
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/aircraft', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://adsbexchange-com1.p.rapidapi.com/v2/mil/',
    headers: {
      'X-RapidAPI-Key': process.env.ADSB_EXCHANGE_API_KEY,
      'X-RapidAPI-Host': 'adsbexchange-com1.p.rapidapi.com'
    }
  };
  try {
    const { data } = await axios.request(options);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching aircraft data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
