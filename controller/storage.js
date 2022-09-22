const smallStorage = require("../models/smallStorage");
const { getAllData, addData } = require("../utils/itemHelper");

const getStorages = async (req, res) => {
  try {
    const storages = await getAllData(smallStorage);
    res.status(200).json(storages);
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
    });
  }
};

const getStorageById = async (req, res) => {
  try {
    const storage = await smallStorage.findOne({ _id: req.params.id });
    if (!storage) {
      throw new Error("id not found", res.status(404));
    }
    res.status(200).json({
      storage,
      message: "storage ditemukan",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 404,
    });
  }
};

const createStorage = async (req, res) => {
  try {
    const newStorage = addData(smallStorage, req);
    const addStorage = await newStorage.save();
    res.status(200).json({ addStorage, message: "new storage added" });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
    });
  }
};

const editStorage = async (req, res) => {
  try {
    const item = await smallStorage.findOne({ _id: req.params.id });
    if (!item) {
      throw new Error("id not found", res.status(404));
    }
    const itemUpdated = await smallStorage.updateOne(
      { _id: req.params.id },
      {
        $set: {
          nama: req.body.nama,
        },
      }
    );
    res
      .status(200)
      .json({ itemUpdated, message: "Data smallStorage Berhasil Di Ubah" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteStorage = async (req, res) => {
  try {
    const deleteStorage = await smallStorage.deleteOne({ _id: req.params.id });
    if (!deleteStorage) {
      throw new Error("id not found", res.status(400));
    }
    res.status(200).json(deleteStorage);
  } catch (err) {
    // res.status(404).json({message: err.message})
    res.json({ message: "id not found" });
  }
};

const reqError = (req, res) => {
  console.log(error.message);
  res.status(404).json({ status: 404, message: "cannot request with this " });
};

module.exports = {
  getStorages,
  getStorageById,
  createStorage,
  editStorage,
  deleteStorage,
  reqError,
};

// module.exports = { getItems };
