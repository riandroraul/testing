const bigStgRoutes = require("express").Router();
const {
  searchItemInBigStorage,
  saveItemToBigStorage,
  getBigStorages,
  getBigStorageById,
  deleteItemInBigStorage,
  deleteBigStorage,
} = require("../controller/bigStorage");

bigStgRoutes.get("/", getBigStorages);
bigStgRoutes.get("/id/:id", getBigStorageById);
bigStgRoutes.get("/search-item", searchItemInBigStorage);
bigStgRoutes.post("/saveItem", saveItemToBigStorage);
bigStgRoutes.delete("/delete-item/:id", deleteItemInBigStorage);
bigStgRoutes.delete("/delete-big-storage/:id", deleteBigStorage);

module.exports = bigStgRoutes;
