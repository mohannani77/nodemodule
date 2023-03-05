const express=require('express');
const path=require('path');
const {readFileSync} =require('fs');

const pageCount={};
/*
{
    "/flight" :1,
    "/home":1
}

*/


//Request==> Count Page ==> Response
//Request ==> MiddleWare==> Response
const counter =(req, res, next)=>{
const url=req.url.toLowerCase();//http://localhost:5001/flight --> /flight
if(pageCount[url]){
    pageCount[url]=pageCount[url]+1;
}
else {
    pageCount[url]=1
}
console.log(` ${url} visitied :- ${pageCount[url]} times`);
next();
}



const app=express();
const homeStyles=readFileSync('./public/assets/css/home.css');

app.use(express.static("public"));

app.get("/home",counter ,(req,res)=>{
    res.sendFile(path.resolve(__dirname, './public/home.html'));//__dirname  tells you the absolute path of the directory containing the currently executing file
});
app.get('/flights',counter, (req, res)=>{
    console.log("User entered into Flights Page");
res.status(200).send(`<h1>Flights Page and visitor count is ${pageCount[req.url]} times</h1>`);
});

app.all('*',counter, (req, res)=>{//For all the request other that defined in GET/POST/PUT/DELETE
console.log("User entered into 404 Page");
res.status(404).send("Sucees Page");
});


app.listen(5001, ()=>{
    console.log('server is listening on port 5001....');
})