var $ = require('jQuery');
var guests = {
  list: [],

  printList: function() {
    $('#list ul').html('');
    this.list.forEach(function(nick) {
      $('#list ul').append('<li>' + nick + '</li>');
    })
  }

  }

module.exports = guests;