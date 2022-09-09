const { testStorage } = require("../controller/storage");

const storageRoutes = require("express").Router();

storageRoutes.get("/", testStorage);

module.exports = storageRoutes;
