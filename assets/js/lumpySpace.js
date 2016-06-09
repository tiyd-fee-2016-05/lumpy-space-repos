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

      $.getJSON('https://api.github.com/users/' + ghSidebar + '/repos' )
        .done(showRepo);

        var repos = {};

        $('script[type="text/html"]').each(function () {
          var repos = $(this);
          repos[repos.attr('#gh_repo_info')] = _.template($('#' + 'gh_repo_info').html())
          repos.remove();
            $('#repo_info').html(showRepo({ name: 'Jane Doe' }));
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

// SHOW REPO ATTEMPT// gathered from the demos section on the class repo

//   var views = {};
//
//   $('script[type="text/html"]').each(function () {
//     var repos = $(this);
//     repos[repos.attr('#gh_repo_info')] = _.template($('#' + 'gh_repo_info').html())
//     repos.remove();
//       $('#repo_info').html(showRepo({ name: 'Jane Doe' }));
// })

  // });
