const assignRoutes = require("express").Router();
const {
  searchItemInStorage,
  searchItemInBigStorage,
  saveItemToBigStorage,
} = require("../controller/assignItem");

assignRoutes.post("/", saveItemToBigStorage);
assignRoutes.get("/search", searchItemInBigStorage);

module.exports = assignRoutes;
