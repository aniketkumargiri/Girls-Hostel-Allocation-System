var Mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

const readline = require('readline-sync');

let roll1 = readline.question("Enter first roll no: ");
let roll2 = readline.question("Enter second roll no: ");
if (roll1 === "" && roll2 === "") {
    console.log("Enter a roll number!")
    process.exit();
}

let exi = false;
Mongoclient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("1stYear");
    var query1f = { first: `${roll1}` };
    var query1s = { second: `${roll1}` };
    var query2f = { first: `${roll2}` };
    var query2s = { second: `${roll2}` };
    var new_query1f = { first: `${roll1}` };
    var new_query1s = { second: `${roll1}` };
    var new_query2f = { first: `${roll2}` };
    var new_query2s = { second: `${roll2}` };
    dbo.collection("Double").updateOne(query1f, { $set: new_query2f }, function (err, res) {
        if (err) throw err;
    })
    dbo.collection("Double").updateOne(query1s, { $set: new_query2s }, function (err, res) {
        if (err) throw err;
    })
    dbo.collection("Double").updateOne(query2f, { $set: new_query1f }, function (err, res) {
        if (err) throw err;
    })
    dbo.collection("Double").updateOne(query2s, { $set: new_query1s }, function (err, res) {
        if (err) throw err;
    })

});
