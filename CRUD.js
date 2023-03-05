const fs=require("fs");
const fsPromise=require("fs/promises");

const NEW_CONTENT="This is updated content from Mayank";


const filePath="./files/text-files/output.txt";

//Synchronous version of File Reading
fs.readFile(filePath, 'utf8', (err, data)=>{
    if(err){
        console.log("Error while reading File:- " + err);
        return;
    }
    console.log(data);
});

//Asynchronous Version of File reading
async function readFileData(){
    try{
        const data=await fsPromise.readFile(filePath, {encoding: 'utf8'});
    console.log("DATA FROM ASYNC FUNCTION:-" + data);

    }
    catch(err){
        console.log("Error while reading File:- " + err);
    }
}
readFileData();
//fs.readFile(), fs.readFileSync() read the content from file and return the data

/*

r+	This flag opens the file for reading and writing	
w+	This flag opens the file for reading and writing and it also positions the stream at the beginning of the file	
a	This flag opens the file for writing and it also positions the stream at the end of the file	
a+	This flag opens the file for reading and writing and it also positions the stream at the end of the file

*/
/*
r+ --> File not get create if it doesn't exist
w+ --> File gets created if it doesn't exist
a --> File gets created if it doesn't exist
a+ --> File gets created if it doesn't exist
*/


//Synchronous version of File Writing
fs.writeFile(filePath, NEW_CONTENT,{flag: 'a+'}, err=>{
    if(err){
        console.log("Error while reading File:- " + err);
        return;
    }
});

fs.unlink(filePath, err=>{
    if(err){
        console.log("Error while reading File:- " + err);
        return;
    }
});



// async function writeFileData(){
//     try{
//    const data=await fsPromise.writeFile(filePath,NEW_CONTENT);
//     console.log("DATA WRITING FROM ASYNC FUNCTION:-" + data);

//     }
//     catch(err){
//         console.log("Error while Writing File:- " + err);
//     }
// }
// writeFileData();



//Node File System with Directories--> https://github.com/sohamkamani/nodejs-file-system-examples