const Item = require("../models/items");
const SmallStorage = require("../models/smallStorage");
const BigStorage = require("../models/bigStorage");
const { getAllData } = require("../utils/Helper");

const getBigStorages = async (req, res) => {
  try {
    const bigStorages = await getAllData(BigStorage);
    const itemInBigStg = await BigStorage.find({
      items: { $elemMatch: { id: "632c1719b3dc6c467db6e9fd" } },
    });
    console.log(itemInBigStg);
    res.status(200).json(bigStorages);
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
    if (!item || !storage) {
      throw new Error("id item or id storage not found", res.status(400));
    }
    const newData = new BigStorage({
      _id: storage._id,
      nama: storage.nama,
      items: { id: item._id },
    });
    if (bigStorage) {
      throw new Error("id storage already stored", res.status(400));
    }
    const result = await newData.save();
    res.status(200).json({ message: "success", result });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
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
};
