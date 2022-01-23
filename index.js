const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "test.html");
});

app.post("/scan_wifi", (req, res) => {
  res.status(200).send({
    arrs : ["Lam de thuong", "Nguyen"]
  });
});

app.post("/update_ssid", (req, res) => {
  console.log(req.body);
  res.status(200).send("OK");
});

server.listen(3000);