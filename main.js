var express = require('express');
var app = express();
const port = 8080;
const db = require("./config/db");
const bodyParser = require('body-parser');
//const Post = require('./models/post');

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/css'));

app.get('/', function(req, res) {
    res.redirect('/main');
});

app.get('/main', function(req, res) {
  res.sendfile('mainpage.html');
});

app.get('/test', (req, res) => { 
    res.sendFile(__dirname + '/test.html') 
   });



app.get('/breeds', (req, res) => { 
res.sendFile(__dirname + '/breeds.html') 
   });


/*app.listen(8080);
console.log('SERVER UP!');   */
const MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.urlencoded({ extended: true, })); 

MongoClient.connect(db.url, (err, database) => { 
if (err) return console.log(err) 

require('./app/routes')(app, database); 

app.listen(port, () => { 
console.log('SERVER UP!'); 
}); 
})
//db tyt choto rabotalo
/*
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const url = "mongodb://Alexy247:3e4i566t@ds038319.mlab.com:38319/breedsdogs";


    
const mongoClient = new MongoClient(url, { useNewUrlParser: true });


mongoClient.connect(function(err, client){
    dbClient = client;
    app.locals.collection = client.db("bredsdogs").collection("Breeds");
      if(err){
          return console.log(err);
      }
      // взаимодействие с базой данных
      client.close();
  });  
*/




//проверка для ввода тома
/*mongoClient.connect(function(err, client){
      
    var db = client.db("breedsdogs");
    const collection = db.collection("Breeds");
    let user = {breed: "Tom", img: "23", des: "djk", dif:7};
    collection.insertOne(user, function(err, result){
          
        if(err){ 
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });
});*/