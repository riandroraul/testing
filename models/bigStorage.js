const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const BigStorage = mongoose.model("BigStorage", {
  // _id: {
  //   type: Number,
  //   default: null,
  // },
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
