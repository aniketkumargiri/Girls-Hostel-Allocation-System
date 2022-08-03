var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Seniors");
    var myobj = [{ RoomNO: "01", first: "bt20cse111", second: "", isAllocated: 1 },
    { RoomNO: "02", first: "bt20cse121", second: "bt20cse122", isAllocated: 2 },
    { RoomNO: "03", first: "", second: "", isAllocated: 0 },
    { RoomNO: "04", first: "", second: "", isAllocated: 0 },
    { RoomNO: "05", first: "", second: "", isAllocated: 0 },
    { RoomNO: "06", first: "bt20cse001", second: "bt20cse002", isAllocated: 2 },
    { RoomNO: "07", first: "", second: "", isAllocated: 0 },
    { RoomNO: "08", first: "", second: "", isAllocated: 0 },
    { RoomNO: "09", first: "", second: "", isAllocated: 0 },
    { RoomNO: "10", first: "", second: "", isAllocated: 0 },
    { RoomNO: "11", first: "", second: "", isAllocated: 0 },
    { RoomNO: "12", first: "", second: "", isAllocated: 0 },
    { RoomNO: "13", first: "", second: "", isAllocated: 0 },
    { RoomNO: "14", first: "", second: "", isAllocated: 0 },
    { RoomNO: "15", first: "", second: "", isAllocated: 0 },
    { RoomNO: "16", first: "", second: "", isAllocated: 0 },
    { RoomNO: "17", first: "", second: "", isAllocated: 0 },
    { RoomNO: "18", first: "", second: "", isAllocated: 0 },
    { RoomNO: "19", first: "", second: "", isAllocated: 0 },
    { RoomNO: "20", first: "", second: "", isAllocated: 0 },
    { RoomNO: "21", first: "", second: "", isAllocated: 0 },
    { RoomNO: "22", first: "", second: "", isAllocated: 0 },
    { RoomNO: "23", first: "", second: "", isAllocated: 0 },
    { RoomNO: "24", first: "", second: "", isAllocated: 0 },
    { RoomNO: "25", first: "", second: "", isAllocated: 0 },
    { RoomNO: "26", first: "", second: "", isAllocated: 0 },
    { RoomNO: "27", first: "", second: "", isAllocated: 0 },
    { RoomNO: "28", first: "", second: "", isAllocated: 0 },
    { RoomNO: "29", first: "", second: "", isAllocated: 0 },
    { RoomNO: "30", first: "", second: "", isAllocated: 0 },
    ];
    dbo.collection("Double").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Records are inserted.")
        db.close;
    })
});
