const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { College, Student } = require("./database");


app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  College.find(function (err, found) {
    res.json(found);
  }).catch((err) => {
    res.status(400).json({ message: err });
  });
});

app.post("/register", function (req, res) {
  const user = req.body;
  College.find({ college_name: user.college_name }, function (err, found) {
    if (found.length) {
      // already exist
      found[0].users.push(new Student(user));
      found[0].save();
    } else {
      const new_student = new Student(user);

      const new_college = new College({
        college_name: user.college_name,
        users: [new_student],
      });
      new_college.save();
    }
    res.status(200).json({ message: "Success" });
  }).catch((err) => {
    res.status(400).json({ message: err });
  });
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Server started in port 5000");
});
