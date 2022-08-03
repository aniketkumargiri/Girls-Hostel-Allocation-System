const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");

const mongoose = require('mongoose');
const mongoose2 = require('mongoose');
mongoose.connect('mongodb://localhost:27017/1stYear');
mongoose2.connect('mongodb://localhost:27017/Seniors');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

const Register = require("./models/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.set("views", template_path);

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/register", function (req, res) {

    var name = req.body.name;
    var rollno = req.body.RollNo;
    var oc = req.body.html;

    var data = {
        "name": name,
        "Roll No.": rollno,
        "Occupancy": oc
    }
    db.collection('allocations').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });

    return res.redirect('submit.hbs');
})


app.listen(port, () => {
    console.log(`server running at port number ${port}`);
})

