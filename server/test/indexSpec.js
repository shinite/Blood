var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");


describe("Testing /movie/add Method", function(err){
it("should respond", function(done){
url
    .post("/movie/add")
    .expect(200)
    .end(function(err,res){
      res.text.should.be.equal("added");
      done();
    });

});
});

describe("Testing /movie/display Method ", function(err){
it("should respond", function(done){
url
    .get("/movie/display")
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      var myObj = JSON.parse(res.text);
      console.log(myObj);
      myObj[0].Title.should.be.equal("Harry Potter");
      done();
    });

});
});
describe("Testing /movie/update Method ", function(err){
it("should resopnd", function(done){
url
    .put("/movie/update/:id/:title")
    .expect(200)
    .end(function(err,res){
      res.text.should.be.equal("Update Successful");
      done();
    });
});
});

describe("Testing /movie/delet Method ", function(err){
it("should resopnd", function(done){
  url
      .delete("/movie/delete")
      .expect(200)
      .end(function(err,res){
        res.text.should.be.equal("Movie deleted!");
        done();
      });
});
});
