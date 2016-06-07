$(function(){
  'use strict';
});

var x = 1;
console.log(x);


var greeting = _.template(', <%- m.name %>!', { variable: 'm' });
var renderedHtml = greeting({ name: '' });
$('#lo_name').html(renderedHtml);
