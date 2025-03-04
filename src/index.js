const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res.send("Web page running");
});
app.listen("8080", () => {});
