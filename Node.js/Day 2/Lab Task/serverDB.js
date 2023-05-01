//#region Requires
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
let PORT = process.env.PORT || 70007;
const bodyParser = require("body-parser");
//#endregion

//#region mongoose configuration
mongoose.connect("mongodb://0.0.0.0:27017/Students");
let studentsD = mongoose.Schema;
let studentsSchema = new studentsD({
  id: Number,
  name: String,
  nationality: String,
  city: String,
  latitude: Number,
  longitude: Number,
  gender: String,
});
let students = mongoose.model("students", studentsSchema);
//#endregion

//#region Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// make assets folder static
app.use(express.static(__dirname + "/assets"));
//#endregion

//#region Requests
mongoose.connection.on("error", () => {
  console.log("Error");
});
mongoose.connection.once("open", () => {
  console.log("connection success to database");
  app.get("/", async (req, res) => {
    const data = await students.find();
    res.render("home.ejs", { data });
  });
});

app.post("/", async (req, res) => {
  let newStudent = new students(req.body);
  await newStudent.save();
  res.send("your request saved");
});

app.put("/", async (req, res) => {
  await students.findByIdAndUpdate({ _id: "0" }, req.body);
  res.send("updated successfully...");
});

//#endregion

app.listen(port, () => {
  console.log("lisitning on http://localhost:" + port);
});
