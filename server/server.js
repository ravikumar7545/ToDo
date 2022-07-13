const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use(require("./Router/router.js"));

app.listen(PORT, () => {
  console.log("Connection successful");
});
