const {
  getStorages,
  getStorageById,
  createStorage,
  editStorage,
  deleteStorage,
} = require("../controller/storage");

const storageRoutes = require("express").Router();

storageRoutes.get("/", getStorages);
storageRoutes.get("/:id", getStorageById);
storageRoutes.post("/createItem", createStorage);
storageRoutes.put("/editItem", editStorage);
storageRoutes.delete("/deleteItem", deleteStorage);

module.exports = storageRoutes;
