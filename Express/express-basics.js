const express=require('express');
const app=express();


app.get('/', (req, res)=>{
    console.log("User entered into Home Page");
res.status(200).send("Home Page");
});


app.get('/flights', (req, res)=>{
    console.log("User entered into Flights Page");
res.status(200).send("Flights Page");
});

app.all('*', (req, res)=>{//For all the request other that defined in GET
console.log(req);
console.log("User entered into 404 Page");
res.status(404).send("404 Page");
});


app.listen(5000, ()=>{
    console.log("Server is listening on Port 5000....");
});