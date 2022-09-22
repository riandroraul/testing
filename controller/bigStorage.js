const Item = require("../models/items");
const SmallStorage = require("../models/smallStorage");
const BigStorage = require("../models/bigStorage");

const saveItemToBigStorage = async () => {
  try {
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
    });
  }
};
const searchItemInBigStorage = async () => {
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
