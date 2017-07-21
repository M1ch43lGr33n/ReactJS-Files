var fs = require('fs');

var text = fs.readFileSync('textFile.txt');
console.log(text.toString());
console.log("finnished"); 