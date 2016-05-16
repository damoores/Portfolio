var projectView = {};

projectView.handleMainNav = function() {
  $('.site-navbar').on('click', 'li', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    var show =$(this).attr('data-content');
    $('#' + show).show();
  });
  $('.site-navbar .tab:first').click();
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide();
  $('.read-on').on('click', function(e) {
    e.preventDefault();
    $('.project-body *:nth-of-type(n+2)').show();
    $('.read-on').hide();
  });
};

$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
});
