import * as fs from 'fs';


// !Write Data
// fs.readFile("file1.txt","utf8", (err, data) => console.log(data));


// !Copy and past it to another destination
fs.copyFile('file1.txt', 'destination.txt', () =>{
    console.log("Done");
});