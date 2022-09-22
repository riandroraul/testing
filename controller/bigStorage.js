const Item = require("../models/items");
const SmallStorage = require("../models/smallStorage");
const BigStorage = require("../models/bigStorage");

const saveItemToBigStorage = async (req, res) => {
  try {
    const item = Item.findOne({ _id: req.body.idItem });
    const storage = SmallStorage.findOne({ _id: req.body.idStg });
    if (!item || !storage) {
      throw new Error("id item or id storage not found", res.status(400));
    }
    res.status(200).json({ message: "success" });
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

module.exports = { saveItemToBigStorage, searchItemInBigStorage };
