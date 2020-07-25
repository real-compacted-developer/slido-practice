const express = require("express");
const getAllCards = require("./getAllCards");

const card = express.Router();

card.get("/all/", getAllCards);

module.exports = card;
