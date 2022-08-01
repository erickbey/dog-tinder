const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config({ path: "../config.env" });

const app = express();

const MONGO_URI = process.env.DB_URI;

if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to Database'))
.catch(error => console.error('Mongo Connection Error', error));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});