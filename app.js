var express = require("express");
var app = express();
var PORT = 5001;
var dataSet = []
var cors = require('cors');

dataSet.push({ name: "user"});

app.use(express.json());
app.use(cors());

app.post('/register',function(req,res){
    let userRegistrationData = req.body;
    console.log(userRegistrationData);
    
    res.json(userRegistrationData);
})

app.get('/name', function (req, res)  {
    
    console.log("User Name is:-");
    console.log(dataSet)
    res.json(dataSet)
    });
app.get('/email', function (req, res) 
{
    console.log("User Email is:-");
    
    let data = req.body
    dataSet.push(data)
    console.log(dataSet)
    res.json(dataSet)
   
});

app.get('/password', function (req, res) 
{
    console.log("User Password is:-");
    
    let data = req.body
    dataSet.push(data)
    console.log(dataSet)
    res.json(dataSet)
   
});

app.get('/mobile', function (req, res) 
{
    console.log("User Mobile-number is:-");
    
    let data = req.body
    dataSet.push(data)
    console.log(dataSet)
    res.json(dataSet)
   
});


app.listen(PORT, function () {
    console.log("We Are Live On Server  " + PORT)
})
