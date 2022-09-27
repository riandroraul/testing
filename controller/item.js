const Item = require("../models/items");
const { getAllData, addData } = require("../utils/Helper");

const getItems = async (req, res) => {
  try {
    const items = await getAllData(Item);
    res.status(200).json(items);
  } catch (error) {
    console.log(error.message);
    res.json({
      status: 200,
      message: error.message,
    });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    if (!item) {
      throw new Error("id not found", res.status(404));
    }
    res.status(200).json({
      status: 200,
      message: "buku ditemukan",
      result: item,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

const createItem = async (req, res) => {
  try {
    const newItem = addData(Item, req);
    const duplikat = await Item.findOne({ _id: req.body._id });
    if (duplikat) {
      throw new Error("id item already exist", res.status(400));
    }
    const result = await newItem.save();
    res.status(200).json({ status: 200, message: "new item added", result });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: 400,
      message: error.message,
    });
  }
};

const editItem = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    if (!item) {
      throw new Error("id not found", res.status(404));
    }
    const itemUpdated = await Item.updateOne(
      { _id: req.params.id },
      {
        $set: {
          nama: req.body.nama,
        },
      }
    );
    res.status(200).json({
      status: 200,
      message: "Data Item Updated",
      result: itemUpdated,
    });
  } catch (err) {
    res.json({ status: 404, message: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    if (!item) {
      throw new Error("id not found", res.status(404));
    }
    const deleteItem = await Item.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .json({ status: 200, message: "item deleted", result: deleteItem });
  } catch (err) {
    // res.status(404).json({message: err.message})
    res.json({ status: 404, message: err.message });
  }
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  editItem,
  deleteItem,
};
