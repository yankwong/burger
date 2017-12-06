var orm = require('../config/orm');
const DB_TABLE = 'burgers';

var burger = {
  all: function() {
    orm.selectAll(DB_TABLE, function(data) {

    });
  },
  insert: function(valObj) {
    orm.selectAll(DB_TABLE, valObj, function(data) {

    });
  },
  update: function(valObj) {
    orm.updateOne(DB_TABLE, valObj, function(data) {

    });
  }
};

module.exports = burger;