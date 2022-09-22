const bigStgRoutes = require("express").Router();
const {
  searchItemInStorage,
  searchItemInBigStorage,
  saveItemToBigStorage,
} = require("../controller/bigStorage");

bigStgRoutes.post("/saveItem", saveItemToBigStorage);
bigStgRoutes.get("/search", searchItemInBigStorage);

module.exports = bigStgRoutes;
