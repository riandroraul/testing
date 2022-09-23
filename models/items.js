const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Item = mongoose.model("Item", {
  _id: {
    type: Number,
    default: null,
  },
  nama: {
    type: String,
    required: true,
  },
});

module.exports = Item;
