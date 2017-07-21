var fs = require('fs');
var data = 'This text goes to file';

//Create a writeable stream
var writerStream = fs.createWriteStream('output.txt');

//write the data to stream with encoding to be UTF8
writerStream.write(data, 'UTF8');

//mark the end of the file
writerStream.end();

//Handle stream events --> finish, and error
writerStream.on('finish' , function(){
console.log("Write completed.");
});

writerStream.on('error' , function(end){
console.log(err.stack);
});