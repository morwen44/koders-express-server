const fs = require("fs");
const dbName = "koders.json";

function init() {
  const dbExists = fs.existsSync(dbName);

  if (!dbExists) {
    fs.writeFileSync(dbName, JSON.stringify([]), "utf-8");
  }
}

function getDB() {
  const content = fs.readFileSync(dbName, "utf-8");
  return JSON.parse(content);
}

function updateDB(data) {
  fs.writeFileSync(dbName, JSON.stringify(data), "utf-8");
}

module.exports = { init, getDB, updateDB };
