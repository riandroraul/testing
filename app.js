require("dotenv").config();
const itemRoutes = require("./routes/item");
const storageRoutes = require("./routes/storage");
const bigStgRoutes = require("./routes/bigStorage");
const bodyParser = require("body-parser");
const reqError = require("./controller/error");

const app = require("express")();
const port = process.env.PORT;
require("./database");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/storage", storageRoutes);
app.use("/bigStorage", bigStgRoutes);
app.use("/item", itemRoutes);
app.use("/", reqError);

const server = app.listen(port, () => {
  console.log(`app listen at http://localhost:${port}`);
});
