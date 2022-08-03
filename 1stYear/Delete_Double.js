var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

const readline = require('readline-sync');

let roll = readline.question("Enter roll no: ");

if (roll === "") {
    console.log("Enter a valid roll number!")
    process.exit();
}

Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("1stYear");
    var query = { first: `${roll}` };
    var query2 = { second: `${roll}` };
    var new_query = { first: "" };
    var new_query2 = { second: "" };
    dbo.collection("Double").updateOne(query, { $inc: { isAllocated: -1 } ,  $set: new_query }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0) {
            console.log("Record deleted successfully.")
        }
    })
    dbo.collection("Double").updateOne(query2, { $inc: { isAllocated: -1 }, $set: new_query2 }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0) {
            console.log("Record deleted successfully.")
        }  
    })

});
