const router = require("express").Router();
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

mongoose.connect("mongodb://127.0.0.1/todo").then(() => {
  console.log("Database connected");
});

var task = mongoose.model("task", {
  name: { type: String },
});

router.get("/getTask", (req, res) => {
  task.find().then((data) => {
    res.json(data);
  });
});

router.post("/deleteTask", (req, res) => {
  task.deleteOne({ _id: ObjectId(req.body.id) }).then(() => {
    res.send("deleted successfully");
  });
});

router.post("/saveTask", (req, res) => {
  if (req.body.task !== "") {
    var new_task = task({
      name: req.body.task,
    });
    new_task.save();
    res.send("hemlo");
  }
});

module.exports = router;
