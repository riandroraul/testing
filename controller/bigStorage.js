const Item = require("../models/items");
const SmallStorage = require("../models/smallStorage");
const BigStorage = require("../models/bigStorage");
const { getAllData } = require("../utils/Helper");

const getBigStorages = async (req, res) => {
  try {
    const bigStorages = await getAllData(BigStorage);
    res.status(200).json(bigStorages);
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
    });
  }
};

const findItemInStorage = async (req, res) => {
  try {
    const findItem = await BigStorage.findOne({
      items: [{ id: "632c1aeb675cfe7555169228" }],
    });
    res.status(200).json(findItem);
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
    });
  }
};

const saveItemToBigStorage = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.body.idItem });
    const storage = await SmallStorage.findOne({ _id: req.body.idStg });
    const bigStorage = await BigStorage.findOne({ _id: req.body.idStg });
    const findItem = await BigStorage.findOne({
      // _id: req.body.idStg,
      items: [{ id: req.body.idItem }],
    });
    console.log(bigStorage);
    if (!item || !storage) {
      throw new Error("id item or id storage not found", res.status(400));
    }
    const newData = new BigStorage({
      _id: storage._id,
      nama: storage.nama,
      items: { id: item._id },
    });
    if (findItem) {
      // if (findItem) {
      throw new Error("id storage or id item already stored", res.status(400));
      // }
    }
    if (bigStorage) {
      if (!findItem) {
        await BigStorage.updateOne(
          { _id: bigStorage._id },
          { $push: { items: { id: item._id } } }
        );
      } else {
        throw new Error("id item already stored", res.status(400));
      }
    } else {
      const result = await newData.save();
      res.status(200).json({ message: "success", result });
    }
  } catch (error) {
    console.log(error.message);
    res.json({
      status: 400,
      message: error.message,
    });
  }
};
const searchItemInBigStorage = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
    });
  }
};

module.exports = {
  saveItemToBigStorage,
  searchItemInBigStorage,
  getBigStorages,
  findItemInStorage,
};
