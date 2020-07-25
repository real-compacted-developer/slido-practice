const express = require("express");
const entryPoint = express.Router();

const card = require("./card/index");

entryPoint.use("/card/", card);

module.exports = entryPoint;
