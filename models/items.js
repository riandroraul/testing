const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Item = mongoose.model("Item", {
  _id: {
    type: String,
    default: function () {
      return new ObjectId().toString();
    },
  },
  nama: {
    type: String,
    required: true,
  },
});

module.exports = Item;
