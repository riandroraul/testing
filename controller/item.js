const { getData, saveData, getOneData } = require("../utils/helper");
const items = require("../data/items");

const getItems = (req, res) => {
  try {
    res.status(200).json({ items, message: "get items", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getItemById = (req, res) => {
  try {
    // console.log(req.params);
    const id = parseInt(req.params.id);
    const allId = [];
    items.forEach((item) => {
      allId.push(item.id);
    });
    if (!allId.includes(id)) {
      throw new Error("id not found");
    }
    const result = getOneData(items, id);
    return res
      .status(200)
      .json({ result, message: "get item by id", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const createItem = (req, res) => {
  try {
    const newItem = {
      id: req.body.id,
      nama: req.body.nama,
    };
    const result = saveData(newItem, items);

    return res
      .status(200)
      .json({ result, message: "create item", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const editItem = (req, res) => {
  try {
    res.status(200).json({ message: "edit item", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteItem = (req, res) => {
  try {
    res.status(200).json({ message: "delete item", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  editItem,
  deleteItem,
};
