const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require("../db/config");
const pg = require("pg");
const { getBooks, addBook } = require("../db/config");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(`${__dirname}/../../client`)));

app
  .route("/books")
  // GET endpoint
  .get(getBooks)
  // POST endpoint
  .post(addBook);

let port = process.env.PORT || 3000;
// Start server
app.listen(port, () => {
  console.log(`Server listening ${port}`);
});
