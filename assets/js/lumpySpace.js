$(function(){
  'use strict';
});



$(function(){
  $('topSearch').on('submit', function(e){
  e.preventDefault();

  var ghSidebar = $('input [class = "searchBox"]').val();

  $.getJSON('https://api.github.com/users' + ghSidebar)
    .done(showUser);
});

function show(template, model) {
   var fn = _.template($('#' + template).html(), { variable: 'm' });
   $('.user-info').html(fn(model));
 }

});


});
