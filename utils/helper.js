const fs = require("fs");

const saveData = (newData, path) => {
  // if (!fs.existsSync(path)) {
  //   fs.writeFileSync(path, `[]`, "utf-8");
  // }
  const file = fs.readFileSync(path, "utf-8");
  const values = JSON.parse(file);
  // let {
  //   data: { qr },
  // } = values;
  values.push(newData);
  // console.log(values);
  const stringifyData = JSON.stringify(values);
  fs.writeFileSync(path, `${[stringifyData]}`, "utf-8");
};

const editData = (data, path, id) => {
  const file = fs.readFileSync(path, "utf-8");
  const values = JSON.parse(file);
  for (let i = 0; i < values.length; i++) {
    if (values[i].id === id) {
      values[i] = data;
    }
  }
  const stringifyData = JSON.stringify(values);
  fs.writeFileSync(path, `${[stringifyData]}`, "utf-8");
};

// const saveData = (data, store) => {
//   // const items = fs.readFileSync("./data/items.js");
//   console.log(data);
//   console.log(store);
//   store.push(data);
//   console.log(store);
//   fs.writeFileSync("./data/items.js", store);
// };

const getData = (path) => {
  const jsonData = fs.readFileSync(path);
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

module.exports = { saveData, getData, getOneData, editData };
