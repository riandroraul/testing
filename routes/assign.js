const assignRoutes = require("express").Router();
const { saveItemToStorage } = require("../controller/assignItem");

assignRoutes.post("/", saveItemToStorage);

module.exports = assignRoutes;
