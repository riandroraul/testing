const SmallStorage = require("../models/smallStorage");
const { getAllData, addData } = require("../utils/Helper");

const getStorages = async (req, res) => {
  try {
    const storages = await getAllData(SmallStorage);
    res.status(200).json({ status: 200, result: storages });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
    });
  }
};

const getStorageById = async (req, res) => {
  try {
    const storage = await SmallStorage.findOne({ _id: req.params.id });
    if (!storage) {
      throw new Error("id not found", res.status(404));
    }
    res.status(200).json({
      status: 200,
      message: "storage ditemukan",
      storage,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

const createStorage = async (req, res) => {
  try {
    const cekIdStorage = await SmallStorage.findOne({ nama: req.body.nama });
    if (cekIdStorage) {
      throw new Error("nama storage already exist", res.status(400));
    }
    const newStorage = addData(SmallStorage, req);
    const addStorage = await newStorage.save();
    res
      .status(200)
      .json({ status: 200, message: "new storage added", addStorage });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: 400,
      message: error.message,
    });
  }
};

const editStorage = async (req, res) => {
  try {
    const item = await SmallStorage.findOne({ _id: req.params.id });
    if (!item) {
      throw new Error("id not found", res.status(404));
    }
    const itemUpdated = await SmallStorage.updateOne(
      { _id: req.params.id },
      {
        $set: {
          nama: req.body.nama,
        },
      }
    );
    res.status(200).json({
      status: 200,
      message: "Data smallStorage Berhasil Di Ubah",
      result: itemUpdated,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteStorage = async (req, res) => {
  try {
    const deleteStorage = await SmallStorage.deleteOne({ _id: req.params.id });
    const storage = await SmallStorage.findOne({ _id: req.params.id });

    if (!deleteStorage || !storage) {
      throw new Error("id not found", res.status(404));
    }
    res
      .status(200)
      .json({ status: 200, message: "storage deleted", result: deleteStorage });
  } catch (err) {
    // res.status(404).json({message: err.message})
    res.json({ status: 404, message: "id not found" });
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
