"use script";
const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
app.get("/devops", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
