const fs = require('fs');
const newFile = require('pdfkit');

var myPDF = new newFile
myPDF.pipe(fs.createWriteStream('file-02.pdf'));

myPDF.font('Times-Roman');
myPDF.fontSize(20);
myPDF.fillColor('blue');

myPDF.text("Name: Aniket Kumar Giri\nRoll No: BT20CSE089\nFahter's name: abcd egfgh\nMobile No: 9123997300\nParents Contact: 9163499020\nEmail Id: aniket.kumar.giri2707@gmail.com\nAddress: Kolkata, West Bengal", { align: 'left' });

myPDF.text("\n\n***The Student with above details have been successfully allocated the room***\n\n", { align: 'center' });

myPDF.text("Warden's Signature: ...Harsh Gaud", { align: 'right' });

myPDF.end()