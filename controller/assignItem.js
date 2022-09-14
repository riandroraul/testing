const { getData, cekId, getOneData, saveData } = require("../utils/helper");
const fs = require("fs");
const dataItem = "./data/items.json";
const dataStg = "./data/storages.json";
const items = getData(dataItem);
const storages = getData(dataStg);
const allId = cekId(items);

// const getItem = (req, res, next) => {};

const saveItemToStorage = (req, res) => {
  try {
    const idItem = parseInt(req.body.idItem);
    const idStg = parseInt(req.body.idStg);
    if (!allId.includes(idItem) || !allId.includes(idStg)) {
      throw new Error("id not found");
    }
    const item = getOneData(items, idItem);
    const stg = getOneData(storages, idStg);
    console.log(stg);
    if (!stg.hasOwnProperty("items")) {
      Object.assign(stg, { items: [item] });
    } else {
      stg.items.push(item);
    }
    fs.writeFileSync(dataStg, `${stg}`, "utf-8");
    return res.status(200).json({ message: "Success", status: 200, stg });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { saveItemToStorage };
