const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config({ path: "../config.env" });

const app = express();

const DB = process.env.DB_URI.replace(
    "<PASSWORD>",
    process.env.DB_PASSWORD
  );

  console.log(DB)
  
  mongoose.connect(DB).then(() => {
    console.log("DB connection successful");
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });