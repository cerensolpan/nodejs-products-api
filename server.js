const express = require("express");
const router = require("./routes/index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var bodyParser = require('body-parser')

dotenv.config({ path: "./.env" });

const mongoURI = process.env.MONGODB_URL;

const app = express();
const PORT = process.env.PORT || 3500;

app.use(bodyParser())

mongoose
  .connect(mongoURI)
  .then(() => console.log("db connected"))
  .catch((e) => console.log("e", e));

app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));