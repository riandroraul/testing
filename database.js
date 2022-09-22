const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`${process.env.MONGODB_URI}/store`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log(`${process.env.MONGODB_URI} terkoneksi...`);
});
