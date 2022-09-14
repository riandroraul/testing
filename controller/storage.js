const {
  getData,
  getOneData,
  saveData,
  editData,
  deleteData,
  cekId,
} = require("../utils/helper");
const dataPath = "./data/storages.json";
const storages = getData(dataPath);
const allId = cekId(storages);

const getStorages = (req, res) => {
  try {
    const storages = getData(dataPath);
    res.status(200).json({ message: "get storages", status: 200, storages });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getStorageById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) {
      throw new Error("id not found");
    }
    const result = getOneData(storages, id);
    return res.status(200).json({
      headers: {
        statusCode: 200,
        message: "Success",
      },
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const createStorage = (req, res) => {
  try {
    const newStg = {
      id: req.body.id,
      nama: req.body.nama,
    };
    if (allId.includes(newStg.id)) {
      throw new Error("id already used");
    }
    const created = saveData(newStg, dataPath);
    return res.status(200).json({
      message: "storage added",
      status: 200,
      created,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const editStorage = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) {
      throw new Error("id not found");
    }
    const updated = {
      id: id,
      nama: req.body.nama,
    };
    editData(updated, dataPath, id);
    res.status(200).json({ message: "storage updated", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteStorage = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) {
      throw new Error("id not found");
    }
    deleteData(dataPath, id);
    res.status(200).json({ message: "storage deleted", status: 200 });
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
