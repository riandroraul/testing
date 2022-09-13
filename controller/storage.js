const { getData, getOneData, saveData, editData } = require("../utils/helper");
const dataPath = "./data/storages.json";
const storages = getData(dataPath);

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
    const id = parseInt(req.params.id);
    const allId = [];
    const {
      data: { qr },
    } = storages;
    // console.log(qr);
    qr.map((item) => {
      allId.push(item.id);
    });
    if (!allId.includes(id)) {
      throw new Error("id not found");
    }
    const result = getOneData(qr, id);
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
    const result = saveData(newStg, dataPath);
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

const editStorage = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updated = {
      id: req.body.id,
      nama: req.body.nama,
    };
    editData(updated, dataPath, id);
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
