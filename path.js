//The path inbuilt module hels for working with file and Directory
const path=require('path');

const filePath="./files/text-files/notes.txt";
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.resolve('notes.txt'));//Get the absolute path using resolve function
console.log(path.normalize(filePath));//Get the relative path using normalize function


