const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, I'm a VPC Container App!"));

app.get("/app", (req, res) => res.send("AWS Fargate Deployed dockerized App v1.0"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
