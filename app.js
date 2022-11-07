// Importing node core modules
const path = require("path");

// Importing third party modules
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// Importing local function modules

// Initilizing express app
const app = express();
const PORT = process.env.PORT;

// Setting up the ejs templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// Middlewares for parsing the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Using the middlewares

// Implementing mongoose function

// Starting the server
app.listen(PORT);
