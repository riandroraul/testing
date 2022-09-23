const getAllData = (model) => {
  return model.find();
};

const addData = (model, req) => {
  return new model({
    _id: req.body._id,
    nama: req.body.nama,
  });
};

module.exports = { getAllData, addData };
