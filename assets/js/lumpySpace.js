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
<<<<<<< HEAD
});

//NavBar//

$(function () {
  $('.topNavBar').on('submit', function(e) {
    e.preventDefault();

    var ghNavBar = $('input[class="searchBox"]').val();

    $.getJSON('https://api.github.com/users/' + ghSidebar)
      .done(showUser);
  });

  function showUser(user) {
    show('gh-user-template', user);
  }

  function show (template, model) {
    var fn = _.template($('#' + template).html(), {
      variable: 'm'});
    $('.SBuser_info').html(fn(model));
    }
});
=======
  });
>>>>>>> 5a9c9e9c0be6742c7578c811c87e33797043d9ec
