var orm = require('../config/orm');
const DB_TABLE = 'burgers';

var burger = {
  all: function(callback) {
    orm.selectAll(DB_TABLE, function(data) {
      callback(data);
    });
  },
  insert: function(valObj, callback) {
    orm.selectAll(DB_TABLE, valObj, function(data) {
      callback(data);
    });
  },
  update: function(valObj, callback) {
    orm.updateOne(DB_TABLE, valObj, function(data) {
      callback(data);
    });
  }
};

module.exports = burger;