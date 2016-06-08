$(function(){
  'use strict';
});

var x = 1;
console.log(x);

// INPUT FUNCTION ASSIGNMENT
$(function () {
  $('#topSearch').on('submit', function(e) {
    e.preventDefault();

    var ghSidebar = $('input[class="searchBox"]').val();

// USER API AJAX CALL
    $.getJSON('https://api.github.com/users/' + ghSidebar)
      .done(showUser)
      .fail(showError);

// REPO API AJAX CALL
    $.getJSON('https://api.github.com/users/' + ghSidebar + '/repos')
      .done(showRepo);
  });

//gh-user-template function
  function showUser(user) {
    show('gh-user-template', user);
    showA('gh-avatar-template', user);  //Instead of adding an entire new showAvatar function. You can add combine them here.

  }
//ERROR MESSAGE
  function showError(req, status, err) {
    err = err || {};
    err.message = err.message || status;
    console.log(err);
    show('gh-error-template', { message: err });
  }

  function show (template, model) {
    var fn = _.template($('#' + template).html(), {
      variable: 'm'});
    $('.SBuser_info').html(fn(model));   //assigning location if successful
    }

// gh-avatar-template
  // TRY1
    //DON'T NEED THIS ANYMORE SINCE WE ADDED showA to the template above (showUser)
      // function showAvatar(a) {
      //   showA('gh-avatar-template', a);
      // }

  function showA (template, model) {      //need unique function name to run both together w/o conflict
    var fn = _.template($('#' + template).html(), {
      variable: 'm'});
    $('.NBuser_info').html(fn(model));   //corresponds with the empty DIV location upon input
    }

//SHOW REPOSITORIES
  function showRepo(repo) {               //this API looks like it is in an array - for loop needed to capture each element
    for (r=0; r<showRepo.length; r++){    //
      showR('gh-repo-template', repo[r]); //print what is found when the for loop block of code is run.
      console.log(repo[r]);
    //this prints the object and it's array. if we're able to assign the object a variable, we can pull out the object information with obj.name
    }
  }

  function showR (template, model) {
    var fn = _.template($('#' + template).html(), {
      variable: 'r'});
    $('.repo_info').html(fn(model));
    }

  });
