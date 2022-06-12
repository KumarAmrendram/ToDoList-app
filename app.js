const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["buy food", "cook food", "eat food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  var today = new Date(); // Date is a date funtion

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { newListItems: items, kindOfDay: day });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  console.log(req.body.newItem);

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is started at 3000");
});