const {
  getData,
  saveData,
  getOneData,
  editData,
  deleteData,
  cekId,
} = require("../utils/helper");
// const items = require("../data/items");
const dataPath = "./data/items.json";
const items = getData(dataPath);
const allId = cekId(items);

const getItems = (req, res) => {
  try {
    return res.status(200).json({ message: "all items", status: 200, items });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "an error occured",
    });
  }
};

const getItemById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) {
      throw new Error("id not found");
    }
    const result = getOneData(items, id);
    return res.status(200).json({
      message: `get item by id = ${id}`,
      status: 200,
      result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "an error occured",
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
      throw new Error("id already used", { status: 400 });
    }
    const created = saveData(newItem, dataPath);
    return res.status(200).json({
      message: "storage added",
      status: 200,
      created,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "an error occured",
    });
  }
};

const editItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) {
      throw new Error("id not found");
    }
    const updated = {
      id: id,
      nama: req.body.nama,
    };
    editData(updated, dataPath, id);
    res.status(200).json({ message: "item updated", status: 200 });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "an error occured",
    });
  }
};

const deleteItem = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!allId.includes(id)) throw new Error("id not found");
    deleteData(dataPath, id);
    res.status(200).json({ message: "item deleted", status: 200 });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "an error occured",
    });
  }
};

const reqError = (req, res) => {
  console.log(error.message);
  res.status(400).json({ status: 400, message: "cannot request with this " });
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  editItem,
  deleteItem,
  reqError,
};
