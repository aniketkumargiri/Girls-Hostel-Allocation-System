var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("1stYear");
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
    dbo.collection("Double").insertMany(DoubleObj, function (err, res) {
        if (err) throw err;
        console.log("Records are inserted.")
        db.close;
    })
});
