var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("1stYear");
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

    dbo.collection("Single").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 Record is inserted in single.");
    });

    db.close;
});
