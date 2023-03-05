const express=require('express');
const app=express();


app.set("view engine", 'ejs');//By default express will look for views folder for all ejs templates
//Partials have access to all the variable declared for Parent
app.get('/', (req, res)=>{
res.render('pages/index', {
    name:"Mayank",
    url:req.url
});//Render function have two parameters, 1st--> Template URL, 2nd--> variable values for ejs template
});

app.get('/flights', (req, res)=>{
    res.render('pages/index', {
        name:"Mayank",
        url:req.url
    });//Render function have two parameters, 1st--> Template URL, 2nd--> variable values for ejs template
    });

    app.get('/hotels', (req, res)=>{
        res.render('pages/index', {
            name:"Mayank",
            url:req.url
        });//Render function have two parameters, 1st--> Template URL, 2nd--> variable values for ejs template
        });

app.listen("5000", ()=>{
    console.log("Server is listening on Port 5000....");
});