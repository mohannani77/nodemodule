const express=require('express');
const path=require('path');
const {readFileSync} =require('fs');
const routes=require('./routes');
const rateLimit= require("express-rate-limit");
const todos=require('./todos.json');

const pageCount={};



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

//https://github.com/express-rate-limit/express-rate-limit
app.use(rateLimit({
    windowMs: 24*60*60*1000,
    max:5,
    message:"You exceeded 10 request usage in 24 hours!",
    header:true,
})
);

app.use("/posts", routes);

app.get("/home",counter ,(req,res)=>{
    res.sendFile(path.resolve(__dirname, './public/home.html'));//__dirname  tells you the absolute path of the directory containing the currently executing file
});
app.get('/flights',counter, (req, res)=>{
    console.log("User entered into Flights Page");
res.status(200).send(`<h1>Flights Page and visitor count is ${pageCount[req.url]} times</h1>`);
});


/*-------------- PAGINATION ----------------*/
//localhost:5001/todos?page=3&limit=5
app.get("/todos", (req, res)=>{
    const page=req.query.page;//3
    const limit=req.query.limit;//5
    const startIndex=(page -1) *limit;//10th index record
    const endIndex=page*limit;//15th index record
    const result=todos.slice(startIndex, endIndex);
    res.json(result);
});

app.all('*',counter, (req, res)=>{//For all the request other that defined in GET/POST/PUT/DELETE
console.log("User entered into 404 Page");
res.status(404).send("Sucees Page");
});


app.listen(5001, ()=>{
    console.log('server is listening on port 5001....');
})