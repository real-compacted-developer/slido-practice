const dao = require("../database/dao");

function getCards() {
  return dao.db.get("cards").value();
}

module.exports = {
  getCards: getCards,
};
