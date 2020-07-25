const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./database/database.json");

class Dao {
  constructor() {
    this.db = low(adapter);
  }
  setDefault() {
    this.db.defaults({ cards: [] }).write();
  }
}

module.exports = new Dao();
