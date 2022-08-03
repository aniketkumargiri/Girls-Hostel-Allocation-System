var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


var myobj = [
    { RoomNO: "01", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "02", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "03", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "04", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "05", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "06", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "07", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "08", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "09", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "10", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "11", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "12", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "13", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "14", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "15", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "16", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "17", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "18", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "19", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "20", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "21", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "22", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "23", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "24", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "25", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "26", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "27", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "28", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "29", Name: "", RollNo: "", isAllocated: 0 },
    { RoomNO: "30", Name: "", RollNo: "", isAllocated: 0 },
];

var DoubleObj = [
    { RoomNO: "01", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "02", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "03", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "04", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "05", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "06", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "07", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "08", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "09", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "10", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "11", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "12", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "13", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "14", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "15", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "16", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "17", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "18", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "19", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "20", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "21", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "22", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "23", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "24", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "25", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "26", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "27", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "28", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "29", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
    { RoomNO: "30", Name1: "", first: "", Name2: "", second: "", isAllocated: 0 },
];

var TripleObj = [
    { RoomNO: "01", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "02", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "03", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "04", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "05", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "06", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "07", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "08", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "09", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "10", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "11", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "12", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "13", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "14", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "15", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "16", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "17", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "18", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "19", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "20", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "21", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "22", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "23", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "24", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "25", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "26", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "27", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "28", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "29", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
    { RoomNO: "30", Name1: "", first: "", Name2: "", second: "", Name3: "", third: "", isAllocated: 0 },
];



Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var db = db.db("Hostel_Allocation");

    db.collection("Single_1stYear").insertMany(myobj, function (err, res) {
        if (err) throw err;
    });
    db.collection("Double_1stYear").insertMany(DoubleObj, function (err, res) {
        if (err) throw err;
    })
    db.collection("Triple_1stYear").insertMany(TripleObj, function (err, res) {
        if (err) throw err;
    })
    db.collection("Single_Seniors").insertMany(myobj, function (err, res) {
        if (err) throw err;
    });
    db.collection("Double_Seniors").insertMany(DoubleObj, function (err, res) {
        if (err) throw err;
    })
    db.collection("Triple_Seniors").insertMany(TripleObj, function (err, res) {
        if (err) throw err;
    })
    console.log("Database created successfully.")
});
