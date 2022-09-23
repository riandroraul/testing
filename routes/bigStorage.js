const bigStgRoutes = require("express").Router();
const {
  searchItemInStorage,
  searchItemInBigStorage,
  saveItemToBigStorage,
  getBigStorages,
} = require("../controller/bigStorage");

bigStgRoutes.get("/", getBigStorages);
bigStgRoutes.post("/saveItem", saveItemToBigStorage);
bigStgRoutes.get("/search", searchItemInBigStorage);

module.exports = bigStgRoutes;
