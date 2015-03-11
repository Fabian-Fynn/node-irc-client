var $ = require('jQuery');
var guests = {
  list: [],

  printList: function() {
    $('#list ul').html('');
    this.list.forEach(function(nick) {
      $('#list ul').append('<li class="guest"><div>' + nick + '</div></li>');
    })
    $('#list li').bind('click', function(){
      $('#text').val('@' + $(this).text() + ' ');
      $('#text').focus();
    });
  }

  }

module.exports = guests;