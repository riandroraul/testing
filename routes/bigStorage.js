const bigStgRoutes = require("express").Router();
const {
  searchItemInStorage,
  searchItemInBigStorage,
  saveItemToBigStorage,
  getBigStorages,
  findItemInStorage,
} = require("../controller/bigStorage");

bigStgRoutes.get("/", getBigStorages);
bigStgRoutes.post("/saveItem", saveItemToBigStorage);
bigStgRoutes.get("/search", searchItemInBigStorage);
bigStgRoutes.get("/find-item", findItemInStorage);

module.exports = bigStgRoutes;
