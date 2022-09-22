const Item = require("../models/items");
const { getAllData, addData } = require("../utils/itemHelper");

const getItems = async (req, res) => {
  try {
    const items = await getAllData(Item);
    res.status(200).json(items);
  } catch (error) {
    console.log(error.message);
    res.json({
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
      item,
      message: "buku ditemukan",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 404,
    });
  }
};

const createItem = async (req, res) => {
  try {
    const newItem = addData(Item, req);
    const addItem = await newItem.save();
    res.status(200).json({ addItem, message: "new item added" });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: 400,
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
    res
      .status(200)
      .json({ itemUpdated, message: "Data Item Berhasil Di Ubah" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const deleteItem = await Item.deleteOne({ _id: req.params.id });
    if (!deleteItem) {
      throw new Error("id not found", res.status(400));
    }
    res.status(200).json(deleteItem);
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
  getItems,
  getItemById,
  createItem,
  editItem,
  deleteItem,
  reqError,
};

// module.exports = { getItems };
