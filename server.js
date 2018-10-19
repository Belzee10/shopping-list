const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// bodyParser Middleware
app.use(bodyParser.json());

// MongoDB
mongoose
  .connect(
    "mongodb://localhost/shoopingList",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Conected"))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
