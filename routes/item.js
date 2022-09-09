const itemRoutes = require("express").Router();
const { testItem } = require("../controller/item");

itemRoutes.get("/", testItem);
module.exports = itemRoutes;
