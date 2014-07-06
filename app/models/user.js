var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function() {
    this.on('creating', this.hashPw);
  },
  hashPw: function(user) {
    var hash = bcrypt.hashSync(user.get('password'));
    user.set('password', hash);
  }
  // comparePw: function() {   
  // }
});

module.exports = User;