const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

const routes = require('./app');

const {
  PORT,
  DB_NAME,
  MONGO_URL
} = process.env;

mongoose.connect(MONGO_URL, {
  dbName: DB_NAME,
}).then(() => { console.log('MongoDB connected'); })
  .catch((error) => { console.log('MongoDB connection error: ', error); });

app.use('/api', routes);

app.listen(PORT, () => {
  console.log('Server connected on PORT: ', PORT);
});
