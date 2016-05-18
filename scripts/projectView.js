var projectView = {};

projectView.handleMainNav = function() {
  $('.site-header').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.site-header .tab:first').click();
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

projectView.setFunFact = function() {
  var elements = document.getElementsByTagName('*');
  var countElements = function() {
    var splitResult = [].reduce.call(elements, function (a,b) {
      var results = a += b;
      return (results);
    }, [] );
    $('#fun-fact').append('<p>There are ' + elements.length + ' HTML tags on this page.</p>' );
    $('#fun-fact').append('<p>That means I typed ' + splitResult.length + ' characters. If I got them all right the first time. Which I did not.</p>' );
    return console.log(splitResult.length);
  };
  countElements();
};

projectView.initIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml($('#article-template')));
  });
  projectView.handleMainNav();
  projectView.setTeasers();
  projectView.setFunFact();
};
