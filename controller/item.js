const { getData, saveData, getOneData, editData } = require("../utils/helper");
// const items = require("../data/items");
const dataPath = "./data/items.json";

const items = getData(dataPath);
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
    const id = parseInt(req.params.id);
    const allId = [];
    const {
      data: { qr },
    } = items;
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

const createItem = (req, res) => {
  try {
    const newItem = {
      id: req.body.id,
      nama: req.body.nama,
    };
    // const {
    //   data: { qr },
    // } = items;
    const result = saveData(newItem, dataPath);
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

const editItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updated = {
      id: req.body.id,
      nama: req.body.nama,
    };
    editData(updated, dataPath, id);
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
