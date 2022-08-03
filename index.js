var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/Hostel_Allocation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.post("/sign_up", (req, res) => {
    var name1 = req.body.name;
    var email = req.body.RollNo

    var query = { isAllocated: 0 };
    var new_query = { Name: `${name1}`, RollNo: `${email}`, isAllocated: 1 }
    db.collection('Single_1stYear').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("rec inserted ");
    })
    return res.redirect('SingleForm_1stYear.html')

})
app.post("/sign_up_double_random", (req, res) => {
    var name1 = req.body.name;
    var email = req.body.RollNo


    var query = { first: "", isAllocated: 1 };
    var query2 = { second: "", isAllocated: 1 };
    var query3 = { first: "", isAllocated: 0 };
    var new_query = { Name1: `${name1}`, first: `${email}`, isAllocated: 2 }
    var new_query2 = { Name2: `${name1}`, second: `${email}`, isAllocated: 2 }
    var new_query3 = { Name1: `${name1}`, first: `${email}`, isAllocated: 1 }
    var modCount = 0;
    db.collection('Double_1stYear').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        if (collection.modifiedCount > 0)
            modCount = collection.modifiedCount;
    })
    if (modCount == 0) {
        db.collection('Double_1stYear').updateOne(query2, { $set: new_query2 }, (err, collection) => {
            if (err) {
                throw err;
            }
            if (collection.modifiedCount > 0)
                modCount = collection.modifiedCount;
        })
    }
    if (modCount == 0) {
        db.collection('Double_1stYear').updateOne(query3, { $set: new_query3 }, (err, collection) => {
            if (err) {
                throw err;
            }
            if (collection.modifiedCount > 0)
                modCount = collection.modifiedCount;
        })
    }


    console.log("Done ");
    return res.redirect('DoubleFormRandom_1stYear.html')

})


app.post("/sign_up_double_fixed", (req, res) => {
    var name1 = req.body.name;
    var email = req.body.RollNo
    var name2 = req.body.name1;
    var email1 = req.body.RollNo1;

    var query = { isAllocated: 0 };
    var new_query = { Name1: `${name1}`, first: `${email}`, Name2: `${name2}`, second: `${email1}`, isAllocated: 2 }

    db.collection('Double_1stYear').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("rec inserted");
    })
    return res.redirect('DoubleformFixed_1stYear.html')

})

app.post("/swap_1st", (req, res) => {
    var roll1 = req.body.RollNo;
    var roll2 = req.body.RollNo1;
    var name1 = req.body.name;
    var name2 = req.body.name1;
    if (roll1 === "" && roll2 === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query1f = { first: `${roll1}`, Name1: `${name1}` };
    var query1s = { second: `${roll1}`, Name2: `${name1}` };
    var query2f = { first: `${roll2}`, Name1: `${name2}` };
    var query2s = { second: `${roll2}`, Name2: `${name2}` };
    var new_query1f = { first: `${roll1}`, Name1: `${name1}` };
    var new_query1s = { second: `${roll1}`, Name2: `${name1}` };
    var new_query2f = { first: `${roll2}`, Name1: `${name2}` };
    var new_query2s = { second: `${roll2}`, Name2: `${name2}` };
    db.collection("Double_1stYear").updateOne(query1f, { $set: new_query2f }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double_1stYear").updateOne(query1s, { $set: new_query2s }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double_1stYear").updateOne(query2f, { $set: new_query1f }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double_1stYear").updateOne(query2s, { $set: new_query1s }, function (err, res) {
        if (err) throw err;
    })
    return res.redirect('swap_first_yr.html')
})

app.post("/delete_single", (req, res) => {
    var roll = req.body.RollNo;
    var name = req.body.name;
    if (roll === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query = { RollNo: `${roll}`,Name:`${name}` };
    var new_query = { Name: "", RollNo: "", isAllocated: 0 };
    db.collection("Single_1stYear").updateOne(query, { $set: new_query }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0)
            console.log("Record deleted successfully.")
        else
            console.log("Record not found!")
    })
    return res.redirect('delete_first_yr_single.html')
})
app.post("/delete_double", (req, res) => {
    var roll = req.body.RollNo;
    var name = req.body.name;
    if (roll === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query = { first: `${roll}`,Name1:`${name}` };
    var query2 = { second: `${roll}`,Name2:`${name}` };
    var new_query = { Name1: "", first: "" };
    var new_query2 = { Name2: "", second: "" };
    db.collection("Double_1stYear").updateOne(query, { $inc: { isAllocated: -1 }, $set: new_query }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0) {
            console.log("Record deleted successfully.")
        }
    })
    db.collection("Double_1stYear").updateOne(query2, { $inc: { isAllocated: -1 }, $set: new_query2 }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0) {
            console.log("Record deleted successfully.")
        }
    })
    return res.redirect('delete_first_yr_double')
})

app.post("/Personal", (req, res) => {

    var name1 = req.body.name;
    var roll = req.body.RollNo;
    var father = req.body.nameF;
    var phone = req.body.num;
    var parent = req.body.pnum;
    var email = req.body.emails;
    var address = req.body.message;
    
    const fs = require('fs');
    const newFile = require('pdfkit');

    var myPDF = new newFile
    myPDF.pipe(fs.createWriteStream('Data_' + `${roll}` + '.pdf'));

    myPDF.font('Helvetica-Bold');
    myPDF.fontSize(16);
    myPDF.fillColor('blue');

    myPDF.text("Indian Institute of Information Technology, Nagpur\n",{align: 'center'}).fillColor('red')
    myPDF.text("Provisonal Hostel Room Allocation Letter\n\n",{align: 'center'}).fillColor('black')
    myPDF.text("Name: "+ `${name1}` +"\n", { align: 'left' })
    myPDF.text("Roll No: "+ `${roll}` + "\n", { align: 'left' })
    myPDF.text("Father's name: " + `${father}` + "\n", { align: 'left' })
    myPDF.text("Mobile No: " + `${phone}` + "\n", { align: 'left' })
    myPDF.text("Parents Contact: " + `${parent}` + "\n", { align: 'left' })
    myPDF.text("Email: "+`${email}` + "\n", { align: 'left' })
    myPDF.text("Address: "+`${address}`+"\n", { align: 'left' })
    myPDF.text("\n\nThe student with above details is provisionally allocated a hostel room in IIITN hostel.Student is required to submit the mentioned original documents to the wardon and will be responsible for the correctness of the respective documents.\n\nThis is provisional hostel room allocation letter.The hostel room will be finalized and allocated by the wardon of hostel.The decision of wardon will be final.\n\n", { align: 'left' });
    myPDF.text("Required Documents:\n")
    myPDF.text("1. College ID Card\n")
    myPDF.text("2. Passport Size photos(6)\n")
    myPDF.text("3. Aadhar Card\n\n\n\n")


    myPDF.text("Warden's Signature:            ", { align: 'right' });

    myPDF.end()
    return res.redirect('personal.html')
})

app.post("/sign_up_Seniors", (req, res) => {
    var name1 = req.body.name;
    var email = req.body.RollNo

    var query = { isAllocated: 0 };
    var new_query = { Name: `${name1}`, RollNo: `${email}`, isAllocated: 1 }
    db.collection('Single_Seniors').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("rec inserted ");
    })
    return res.redirect('SingleForm_Seniors.html')

})
app.post("/sign_up_double_random_Seniors", (req, res) => {
    var name1 = req.body.name;
    var email = req.body.RollNo


    var query = { first: "", isAllocated: 1 };
    var query2 = { second: "", isAllocated: 1 };
    var query3 = { first: "", isAllocated: 0 };
    var new_query = { Name1: `${name1}`, first: `${email}`, isAllocated: 2 }
    var new_query2 = { Name2: `${name1}`, second: `${email}`, isAllocated: 2 }
    var new_query3 = { Name1: `${name1}`, first: `${email}`, isAllocated: 1 }
    var modCount = 0;
    db.collection('Double_Seniors').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        if (collection.modifiedCount > 0)
            modCount = collection.modifiedCount;
    })
    if (modCount == 0) {
        db.collection('Double_Seniors').updateOne(query2, { $set: new_query2 }, (err, collection) => {
            if (err) {
                throw err;
            }
            if (collection.modifiedCount > 0)
                modCount = collection.modifiedCount;
        })
    }
    if (modCount == 0) {
        db.collection('Double_Seniors').updateOne(query3, { $set: new_query3 }, (err, collection) => {
            if (err) {
                throw err;
            }
            if (collection.modifiedCount > 0)
                modCount = collection.modifiedCount;
        })
    }


    console.log("Done ");
    return res.redirect('DoubleformRandom_Seniors.html')

})


app.post("/sign_up_double_fixed_Seniors", (req, res) => {
    var name1 = req.body.name;
    var email = req.body.RollNo
    var name2 = req.body.name1;
    var email1 = req.body.RollNo1;

    var query = { isAllocated: 0 };
    var new_query = { Name1: `${name1}`, first: `${email}`, Name2: `${name2}`, second: `${email1}`, isAllocated: 2 }

    db.collection('Double_Seniors').updateOne(query, { $set: new_query }, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("rec inserted");
    })
    return res.redirect('DoubleformFixed_Seniors.html')

})

app.post("/swap_senior", (req, res) => {
    var roll1 = req.body.RollNo;
    var roll2 = req.body.RollNo1;
    var name1 = req.body.name;
    var name2 = req.body.name1;
    if (roll1 === "" && roll2 === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query1f = { first: `${roll1}`, Name1: `${name1}` };
    var query1s = { second: `${roll1}`, Name2: `${name1}` };
    var query2f = { first: `${roll2}`, Name1: `${name2}` };
    var query2s = { second: `${roll2}`, Name2: `${name2}` };
    var new_query1f = { first: `${roll1}`, Name1: `${name1}` };
    var new_query1s = { second: `${roll1}`, Name2: `${name1}` };
    var new_query2f = { first: `${roll2}`, Name1: `${name2}` };
    var new_query2s = { second: `${roll2}`, Name2: `${name2}` };
    db.collection("Double_Seniors").updateOne(query1f, { $set: new_query2f }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double_Seniors").updateOne(query1s, { $set: new_query2s }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double_Seniors").updateOne(query2f, { $set: new_query1f }, function (err, res) {
        if (err) throw err;
    })
    db.collection("Double_Seniors").updateOne(query2s, { $set: new_query1s }, function (err, res) {
        if (err) throw err;
    })
    return res.redirect('swap_other_yrs.html')
})

app.post("/delete_single_senior", (req, res) => {
    var roll = req.body.RollNo;
    var name = req.body.name;
    if (roll === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query = { RollNo: `${roll}`,Name:`${name}` };
    var new_query = { Name: "", RollNo: "", isAllocated: 0 };
    db.collection("Single_Seniors").updateOne(query, { $set: new_query }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0)
            console.log("Record deleted successfully.")
        else
            console.log("Record not found!")
    })
    return res.redirect('delete_other_single.html')
})
app.post("/delete_double_senior", (req, res) => {
    var roll = req.body.RollNo;
    var name = req.body.name;
    if (roll === "") {
        console.log("Enter a roll number!")
        process.exit();
    }
    var query = { first: `${roll}`,Name1:`${name}` };
    var query2 = { second: `${roll}`,Name2:`${name}` };
    var new_query = { Name: "", first: "" };
    var new_query2 = { Name: "", second: "" };
    db.collection("Double_Seniors").updateOne(query, { $inc: { isAllocated: -1 }, $set: new_query }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0) {
            console.log("Record deleted successfully.")
        }
    })
    db.collection("Double_Seniors").updateOne(query2, { $inc: { isAllocated: -1 }, $set: new_query2 }, function (err, res) {
        if (err) throw err;
        if (res.modifiedCount > 0) {
            console.log("Record deleted successfully.")
        }
    })
    return res.redirect('delete_other_double.html')
})



var db = mongoose.connection;

db.on('error', () => console.log("error in connecting to database"));
db.once('open', () => console.log("connected to database"))

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("Port 3000");