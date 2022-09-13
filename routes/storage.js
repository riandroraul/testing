const {
  getStorages,
  getStorageById,
  createStorage,
  editStorage,
  deleteStorage,
} = require("../controller/storage");

const storageRoutes = require("express").Router();

storageRoutes.get("/", getStorages);
storageRoutes.get("/idStg/:id", getStorageById);
storageRoutes.post("/createStg", createStorage);
storageRoutes.put("/editStg/:id", editStorage);
storageRoutes.delete("/deleteStg", deleteStorage);

module.exports = storageRoutes;
