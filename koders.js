const db = require("./db");

function add(name) {
  if (!name) {
    throw new Error("name is required");
  } //throw sends the error to the catch block and stops the execution of the function
  const koders = db.getDB();
  koders.push(name);
  db.updateDB(koders);
  return koders;
}

function remove(name) {
  if (!name) {
    throw new Error("name is required");
  }
  const koders = db.getDB();
  const koderFound = koders.find((koder) => koder === name);
  if (!koderFound) {
    throw new Error("Koder not found");
  }

  const newKoders = koders.filter(
    (koder) => koder.toLowerCase() !== name.toLowerCase()
  );

  db.updateDB(newKoders);
  return newKoders;
}

function removeAll() {
  db.updateDB([]);
}

function getAll() {
  return db.getDB();
}

module.exports = { add, remove, removeAll, getAll };
