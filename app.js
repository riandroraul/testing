const itemRoutes = require("./routes/item");
const storageRoutes = require("./routes/storage");

const app = require("express")();
require("dotenv").config();
const port = process.env.PORT;

app.use("/storage", storageRoutes);
app.use("/item", itemRoutes);

const server = app.listen(port, () => {
  console.log(`app listen at http://localhost:${port}`);
});
