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
bigStgRoutes.get("/:id", getBigStorageById);
bigStgRoutes.post("/saveItem", saveItemToBigStorage);
bigStgRoutes.get("/search", searchItemInBigStorage);
bigStgRoutes.delete("/delete-item/:id", deleteItemInBigStorage);
bigStgRoutes.delete("/delete-big-storage/:id", deleteBigStorage);

module.exports = bigStgRoutes;
