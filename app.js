require("dotenv").config();
require("./config/db");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");

app.use(express.json({ limit: "50mb" }));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`listning port on http://localhost:${port}`);
});
