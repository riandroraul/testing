const fs = require("fs");

const saveData = (data, path) => {
  const file = fs.readFileSync(path, "utf-8");
  const values = JSON.parse(file);
  console.log(values);
  values.push(data);
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(path, stringifyData);
};

// const saveData = (data, store) => {
//   // const items = fs.readFileSync("./data/items.js");
//   console.log(data);
//   console.log(store);
//   store.push(data);
//   console.log(store);
//   fs.writeFileSync("./data/items.js", store);
// };

const getData = (data) => {
  const jsonData = fs.readFileSync(data);
  return JSON.parse(jsonData);
};

const getOneData = (data, id) => {
  let result = undefined;
  data.forEach((val) => {
    if (val.id === id) {
      result = val;
    }
  });
  return result;
};

module.exports = { saveData, getData, getOneData };
