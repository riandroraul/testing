const itemRoutes = require("express").Router();
const {
  getItems,
  getItemById,
  createItem,
  editItem,
  deleteItem,
} = require("../controller/item");

itemRoutes.get("/", getItems);
itemRoutes.get("/idItem/:id", getItemById);
itemRoutes.post("/create", createItem);
itemRoutes.put("/editItem/:id", editItem);
itemRoutes.delete("/deleteItem/:id", deleteItem);

module.exports = itemRoutes;
