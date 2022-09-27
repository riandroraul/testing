const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const SmallStorage = mongoose.model("SmallStorage", {
  // _id: {
  //   type: Number,
  //   default: null,
  // },
  nama: {
    type: String,
    required: true,
  },
});

module.exports = SmallStorage;
