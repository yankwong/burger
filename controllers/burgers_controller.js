var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
  burger.all(function(data) {
    var hbsObj = {
      burgers : data
    };
    //res.json(hbsObj);
    res.render('index', hbsObj);
  });
});

router.post("/api/new", function(req, res) {
  // cat.create([
  //   "name", "sleepy"
  // ], [
  //   req.body.name, req.body.sleepy
  // ], function(result) {
  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  // });
});

router.post("/api/devour", function(req, res) {
  var data      = req.body,
      devourID  = -1;

  if (typeof data.id !== 'undefinied' || parseInt(data.id) > 0) {
    devourID = parseInt(data.id);

    burger.update({
      devoured  : 1, 
      id        : devourID
    }, function(data) {
      res.json(data);
    });
  }
});

// Export routes for server.js to use.
module.exports = router;
