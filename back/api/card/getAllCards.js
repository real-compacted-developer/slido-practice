const cardController = require("../../controller/card");

module.exports = (req, res) => {
  const cards = cardController.getCards();

  res.status = 200;
  res.json(cards);
};
