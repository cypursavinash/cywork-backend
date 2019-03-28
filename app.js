var express = require("express");
var app = express();
var PORT = 5001;
var dataSet = []
var cors = require('cors');
var mongodb = require('mongodb').MongoClient;
dataSet.push({ name: "user"});
var dbName = 'registeruser'
var mongodbUrl = 'mongodb://localhost/'; 

app.use(express.json());
app.use(cors());




app.post('/register', async function(req,res){
    let userRegistrationData = req.body;
    console.log(userRegistrationData);
    await mongodb.connect(mongodbUrl, async (err, db)=>{
        if(err){
            console.log("Error in connection")
            console.log(err)
        };
        var polDb  = await db.db(dbName);

         await polDb.collection('polls').insertOne(userRegistrationData,(err,res)=>{
            if(err){
                console.log("Error in inserting data");
                console.log(err);
            };
            console.log("1 document inserted");
            db.close();
         })



    })
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
