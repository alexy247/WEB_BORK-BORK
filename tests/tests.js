const expect = require('chai').expect; 
const assert = require("assert");
const should = require('should'), 
supertest = require('supertest') 
const express = require('express'); 
const MongoClient = require('mongodb').MongoClient; 
const db = require('../config/db'); 
const app = express(); 

const server = supertest.agent("http://localhost:8080");

describe("post", function() { 

	it("testing test answer", function(done) {
       let a = {key: '3'};
        server
            .post('/result')
            .send(a)
            .expect(200)
            .expect('Content-Type', /json/) 
            .end(function(err, res) {
                should.exist(res.body);               
                res.body.should.be.instanceof(Array);
                //console.log(res.body);
		    	res.body[0].should.have.property ('breed');
		    	res.body[0].should.have.property ('img');
		    	res.body[0].should.have.property ('des');
		    	res.body[0].should.have.property ('dif');
                res.body[0].dif.should.be.equal('3');
                //res.body[0].dif.should.have.property('3');
                   done();              
            });
           
    });

  
     it('testing show allbreeds', function(done) { 
    	server
		    .post('/allbreeds') 
		    .expect(200) 
		    .expect('Content-Type', /json/) 
		    .end(function(err, res) { 
		    	if (err) return done(err); 
		    	res.body.should.be.instanceof(Array); 
		    	res.body[0].should.have.property ('breed');
		    	res.body[0].should.have.property ('img');
		    	res.body[0].should.have.property ('des');
		    	res.body[0].should.have.property ('dif');
		    	done();   
              });
             
      })

});


describe("get", function() { 
it("check connection to the test", function() { 
    supertest('http://127.0.0.1:8080') 
    .get('/test') 
    .expect(200) 
    .end(function(err, res){ 
    res.status.should.equal(200) 
    }); }) 
it("check connection to the collection of breeds", function() { 
    supertest('http://127.0.0.1:8080') 
    .get('/breeds') 
    .expect(200) 
    .end(function(err, res){ 
    res.status.should.equal(200) 
        }); }) 

describe("connect", function() { 


it("check connection", function() { 
supertest('http://127.0.0.1:8080') 
.get('/') 
.expect(200) 
.end(function(err, res){ 
res.status.should.equal(200) 
}); }) 
});

it("connection to DB ", function() { 
const connect = connect_db(); 
expect(connect).is.empty; 
}) 

 }); 

function connect_db(){ 
let error_db=''; 
MongoClient.connect(db.url, (err, database) => { 
if (err) { 
error_db=err; 
} 
}) 
return error_db; 
}