const getAllData = (model) => {
  return model.find();
};

const addData = (model, req) => {
  return new model({
    nama: req.body.nama,
  });
};

module.exports = { getAllData, addData };
