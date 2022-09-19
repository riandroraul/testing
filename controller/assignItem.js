const { getData, cekId, getOneData, saveData } = require("../utils/helper");
const fs = require("fs");
const dataItem = "./data/items.json";
const dataStg = "./data/storages.json";
const bigStg = "./data/bigStorage.json";
const items = getData(dataItem);
const storages = getData(dataStg);
const allIdItem = cekId(items);
const allIdStg = cekId(storages);

// const getItem = (req, res, next) => {};

const saveItemToStorage = (req, res) => {
  try {
    const idItem = parseInt(req.body.idItem);
    const idStg = parseInt(req.body.idStg);
    // console.log(idStg);
    if (!allIdItem.includes(idItem) || !allIdStg.includes(idStg)) {
      throw new Error("id not found");
    }
    const fileStg = fs.readFileSync(dataStg, "utf-8");
    const values = JSON.parse(fileStg);
    // console.log(values);
    const item = getOneData(items, idItem);
    for (let i = 0; i < values.length; i++) {
      if (values[i].id === idStg) {
        if (!values[i].hasOwnProperty("items")) {
          Object.assign(values[i], { items: [{ id: item.id }] });
        } else {
          for (let j = 0; j < values[i].items.length; j++) {
            if (values[i].items[j].id === idItem) {
              throw new Error("id item already stored");
            }
            values[i].items.push({ id: item.id });
          }
        }
      }
    }
    // console.log(values);
    const stringifyData = JSON.stringify(values);
    fs.writeFileSync(dataStg, `${[stringifyData]}`, "utf-8");
    return res.status(200).json({ message: "Success", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const saveItemToBigStorage = (req, res) => {
  try {
    const idItem = parseInt(req.body.idItem);
    const idStg = parseInt(req.body.idStg);
    if (!allIdItem.includes(idItem) || !allIdStg.includes(idStg)) {
      throw new Error("id not found");
    }
    const fileStg = fs.readFileSync(dataStg, "utf-8");
    const fileStgItems = fs.readFileSync(bigStg, "utf-8");
    const objSmallStg = JSON.parse(fileStg);
    const objBigStg = JSON.parse(fileStgItems);
    const item = getOneData(items, idItem);

    for (let i = 0; i < objSmallStg.length; i++) {
      if (objSmallStg[i].id === idStg) {
        if (!objSmallStg[i].hasOwnProperty("items")) {
          Object.assign(objSmallStg[i], { items: [{ id: item.id }] });
        } else {
          for (let j = 0; j < objSmallStg[i].items.length; j++) {
            if (objSmallStg[i].items[j].id === item.id) {
              throw new Error("id item already stored");
            }
          }
          objSmallStg[i].items.push({ id: idItem });
        }
      }
    }
    var resultSmallStg = objSmallStg.filter((val) => {
      if (val.id === idStg) return val;
    });
    // console.log(resultSmallStg[0]);
    const allIdBigStg = cekId(objBigStg);
    if (!allIdBigStg.includes(idStg)) {
      objBigStg.push(resultSmallStg[0]);
    } else {
      for (let i = 0; i < objBigStg.length; i++) {
        // console.log(objBigStg[i]);
        // console.log(objBigStg[i].id === resultSmallStg[0].id);
        // console.log(resultSmallStg);
        if (objBigStg[i].id === resultSmallStg[0].id) {
          if (!objBigStg[i].hasOwnProperty("items")) {
            Object.assign(objBigStg[i], {
              items: [{ id: resultSmallStg[0].items[0].id }],
            });
          } else {
            objBigStg[i].items.forEach((item) => {
              if (item.id === resultSmallStg[0].items[0].id) {
                console.log("here");
                throw new Error("id item already stored");
              }
            });
            objBigStg[i].items.push({ id: resultSmallStg[0].items[0].id });
          }
        }
      }
    }

    // console.log(objBigStg, 91);
    const stringifyData = JSON.stringify(objBigStg);
    fs.writeFileSync(bigStg, `${[stringifyData]}`, "utf-8");

    // console.log(values);
    // const stringifyData = JSON.stringify(values);
    // fs.writeFileSync(dataStg, `${[stringifyData]}`, "utf-8");
    return res.status(200).json({ message: "Success", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const searchItemInStorage = (req, res) => {
  try {
    const idItem = parseInt(req.query.id);
    for (let i = 0; i < storages.length; i++) {
      if (storages[i].hasOwnProperty("items")) {
        for (let j = 0; j < storages[i].items.length; j++) {
          if (storages[i].items[j].id === idItem) {
            const result = storages[i];
            // console.log(result);
            return res
              .status(200)
              .json({ message: "Success", status: 200, result });
          }
          // throw new Error("id not found");
        }
        throw new Error("id not found");
      }
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveItemToStorage,
  searchItemInStorage,
  saveItemToBigStorage,
};
