const storage = require("../data/storages");
const { getData } = require("../utils/helper");
const dataPath = "./data/storages.json";

const getStorages = (req, res) => {
  try {
    const storages = getData(dataPath);
    res.status(200).json({ storages, message: "get storages", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getStorageById = (req, res) => {
  try {
    res.status(200).json({ message: "get storage by id", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const createStorage = (req, res) => {
  try {
    res.status(200).json({ message: "create storage", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const editStorage = (req, res) => {
  try {
    res.status(200).json({ message: "edit storage", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteStorage = (req, res) => {
  try {
    res.status(200).json({ message: "delete storage", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStorages,
  getStorageById,
  createStorage,
  editStorage,
  deleteStorage,
};
