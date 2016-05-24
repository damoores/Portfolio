(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    if ($('#projects section').length === 0) {
      Project.fetchAll(projectView.initIndexPage);
    }
    $('#about').hide();
    $('#contact').hide();
    $('#projects').show();
  };
  module.projectsController = projectsController;
})(window);
