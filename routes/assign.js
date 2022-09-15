const assignRoutes = require("express").Router();
const {
  saveItemToStorage,
  searchItemInStorage,
  saveItemToBigStorage,
} = require("../controller/assignItem");

assignRoutes.post("/", saveItemToBigStorage);
assignRoutes.get("/search", searchItemInStorage);

module.exports = assignRoutes;
