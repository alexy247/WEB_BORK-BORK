var express = require('express');
const objectId = require("mongodb").ObjectID;
var app = express();

const jsonParser = express.json();

module.exports = function(app,db){
    app.post("/allbreeds",jsonParser, function (req, res) { 
        //const collection = db.collection("Breeds");
        db.collection('Breeds').find().toArray(function(err, results){ 
        if (err) { 
        res.send({ 'error': 'Error find colections breeds' }); 
        } else { 
        res.json(results); 
        
        } 
        
        }); 
    
    });


    app.post("/result",jsonParser, function (req, res) { 
        
       
        db.collection('Breeds').find({'dif': req.body.key}).toArray(function(err, results){ 
           
            if (err) { 
            res.send({ 'error': 'Error find colections breed' }); 
            } else { 
            res.json(results); 
            
            } 
        
            });
    
        });
}