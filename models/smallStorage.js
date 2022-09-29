const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const SmallStorage = mongoose.model("SmallStorage", {
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  nama: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = SmallStorage;
