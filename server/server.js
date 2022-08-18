const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

//db
mongoose.connect(process.env.MONGO_URL, (err) => {
  
  if (err) throw err;
  console.log("db is conected asd");
  const PORT = 8000;
  app.listen(PORT, () => {
    console.log("server is act");
  });
});
// mw

// routes
