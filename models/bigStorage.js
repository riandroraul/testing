const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const BigStorage = mongoose.model("BigStorage", {
  _id: {
    type: String,
    default: "",
  },
  nama: {
    type: String,
    required: true,
    default: "",
  },
  items: {
    type: Array,
    default: [],
  },
});

module.exports = BigStorage;
