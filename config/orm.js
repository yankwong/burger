var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (!err) {
        callback(result);  
      }
      else {
        console.log('error from selectAll', err);
      }
    });
  },
  insertOne: function(table, valueObj, callback) {
    var queryString = "INSERT INTO ?? (`burger_name`, `devoured`, `date`) VALUES (??, ??, NOW());";
    connection.query(queryString, [table, valueObj.name, valueObj.devoured], function(err, result) {
      if (!err) {
        callback(result);
      }
      else {
        console.log('error from insertOne', err);
      }
    });
  },
  updateOne: function(table, valueObj, callback) {
    var queryString = "UPDATE ?? SET `burger_name` = ??, `devoured` = ??, `date` = NOW() WHERE `id` = ??";
    connection.query(queryString, [table, valueObj.name, valueObj.devoured, valueObj.id], function(err, result) {
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
