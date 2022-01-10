const path = require('path');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
});

app.post('/api', (req, res) => {
  const data = {
    url: req.body.url,
    key: process.env.API_KEY,
  };
  axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${data.key}&lang=en&url=${data.url}`)
  .then(response => {
      res.json(response.data);
  }).catch(error => {
      res.json({'error': error});
  });
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});