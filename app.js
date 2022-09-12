const itemRoutes = require("./routes/item");
const storageRoutes = require("./routes/storage");
const bodyParser = require("body-parser");

const app = require("express")();
require("dotenv").config();
const port = process.env.PORT;

app.use(bodyParser.json());
// app.use(express.json)
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/storage", storageRoutes);
app.use("/item", itemRoutes);

const server = app.listen(port, () => {
  console.log(`app listen at http://localhost:${port}`);
});
