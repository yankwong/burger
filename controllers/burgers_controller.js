var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
  burger.all(function(data) {
    var hbsObj = {
      burgers : data
    };
    res.render('index', hbsObj);
  });
});

router.post("/api/new", function(req, res) {
  var data = req.body,
      burgerName = '';
      
  if (typeof data.name !== 'undefinied' || data.name.trim() !== '') {
    burgerName = data.name.trim();

    burger.insert({
      name : burgerName
    }, function(data) {
      res.json(data);
    });
  } 
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
