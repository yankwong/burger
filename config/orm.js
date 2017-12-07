var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (!err) {
        callback(result);  
      }
      else {
        console.log('error from selectAll', err);
      }
    });
  },
  insertOne: function(table, valueObj, callback) {
    var queryString = "INSERT INTO ?? (`burger_name`, `devoured`, `date`) VALUES (?, '0', NOW());";
    connection.query(queryString, [table, valueObj.name], function(err, result) {
      if (!err) {
        callback(result);
      }
      else {
        console.log('error from insertOne', err);
      }
    });
  },
  updateOne: function(table, valueObj, callback) {
    var queryString = "UPDATE "+table+" SET `devoured` = "+valueObj.devoured+" WHERE `id` = "+valueObj.id;
    connection.query(queryString, function(err, result) {
      if (!err) {
        callback(result);
      }
      else {
        console.log('error from updateOne', err);
      }
    });
  }
};

module.exports = orm;
