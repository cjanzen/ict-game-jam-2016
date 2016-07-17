// Thanks to @felixnemis
var express=require("express");

var app=express();

// app.use("/", express.static(__dirname + "/src", {index: "index.htm"}));
app.use("/", express.static(__dirname + "/src", {index: "index.htm"}));
app.listen(3000, function() {
  console.log("They are HERE! Connect to port 3000");
});
