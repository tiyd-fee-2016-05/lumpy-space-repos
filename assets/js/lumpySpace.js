$(function(){
  'use strict';
});

var x = 1;
console.log(x);


//Sidebar!//


$(function () {
  $('#topSearch').on('submit', function(e) {
    e.preventDefault();

    var ghSidebar = $('input[class="searchBox"]').val();

    $.getJSON('https://api.github.com/users/' + ghSidebar)
      .done(showUser);
  });
//gh-user-template function
  function showUser(user) {
    show('gh-user-template', user);
  }

  function show (template, model) {
    var fn = _.template($('#' + template).html(), {
      variable: 'm'});
    $('.SBuser_info').html(fn(model));
    }
});
