const Item = require("../models/items");
const {
  getData,
  saveData,
  getOneData,
  editData,
  deleteData,
  cekId,
} = require("../utils/helper");

const getItems = (req, res) => {
  try {
    return res.status(200).json({ message: "all items", status: 200, items });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
    });
  }
};

const getItemById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) {
      throw new Error("id not found", res.status(404));
    }
    const result = getOneData(items, id);
    return res.status(200).json({
      message: `get item by id = ${id}`,
      status: 200,
      result,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 404,
    });
  }
};

const createItem = (req, res) => {
  try {
    const newItem = {
      id: req.body.id,
      nama: req.body.nama,
    };
    if (allId.includes(newItem.id)) {
      throw new Error("id item already used", res.status(400));
    }
    const created = saveData(newItem, dataPath);
    return res.status(200).json({
      message: "storage added",
      status: 200,
      created,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
    });
  }
};

const editItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) {
      throw new Error("id not found", res.status(404));
    }
    const updated = {
      id: id,
      nama: req.body.nama,
    };
    editData(updated, dataPath, id);
    res.status(200).json({ message: "item updated", status: 200 });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 404,
    });
  }
};

const deleteItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) throw new Error("id not found", res.status(404));
    deleteData(dataPath, id);
    res.status(200).json({ message: "item deleted", status: 200 });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 404,
    });
  }
};

const reqError = (req, res) => {
  console.log(error.message);
  res.status(404).json({ status: 404, message: "cannot request with this " });
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  editItem,
  deleteItem,
  reqError,
};
