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
          }
          values[i].items.push({ id: item.id });
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
    const values = JSON.parse(fileStg);
    const valuesStgItems = JSON.parse(fileStgItems);
    // console.log(values);
    const item = getOneData(items, idItem);
    for (let i = 0; i < values.length; i++) {
      if (values[i].id === idStg) {
        if (!values[i].hasOwnProperty("items")) {
          Object.assign(values[i], { items: [{ id: item.id }] });
          valuesStgItems.push(values[i]);
          // valuesStgItems.forEach((val) => {
          //   console.log(val);
          //   if (val.id === idStg) {
          //     val.items.forEach((item) => {
          //       if (item.id === idItem) {
          //         throw new Error("id item already stored");
          //       }
          //     });
          //     val.items.push({ id: item.id });
          //   }
          //   console.log(valuesStgItems);
          // });
          for (let j = 0; j < valuesStgItems.length; j++) {
            if (valuesStgItems[j].id === idStg) {
              console.log(valuesStgItems);
              for (let k = 0; k < valuesStgItems[j].items.length; k++) {
                if (valuesStgItems[j].items[k].id === idItem) {
                  throw new Error("id item already stored");
                }
                valuesStgItems[j].items.push({ id: item.id });
              }
            }
          }
          console.log(valuesStgItems);
          // const stringifyData = JSON.stringify(valuesStgItems);
          // fs.writeFileSync(bigStg, `${stringifyData}`, "utf-8");
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
