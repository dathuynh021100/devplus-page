const sidebarRoutes = require("./routes/sidebarRoute")
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

//db
mongoose.connect(process.env.MONGO_URL,{
 
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  
  if (err) throw err;
  console.log("db is conected");
  const PORT = 8000;
  app.listen(PORT, () => {
    console.log("server is active");
  });
});
// mw
app.use(express.json())
express.urlencoded({extended : true})
// routes
app.use(sidebarRoutes)

