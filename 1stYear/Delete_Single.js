var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

const readline = require('readline-sync');

let roll = readline.question("Enter roll no: ");
if (roll === "") {
    console.log("Enter a roll number!")
    process.exit();
}

Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("1stYear");
    var query = { RollNo: `${roll}`};
    var new_query = { RollNo: "", isAllocated: 0};
    dbo.collection("Single").updateOne(query, { $set: new_query }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0)
            console.log("Record deleted successfully.")
        else
            console.log("Record not found!")
        db.close();
    })

});
