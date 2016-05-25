(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    if ($('#projects section').length === 0) {
      Project.fetchAll(projectView.initIndexPage);
    }
    $('#projects').show().siblings().hide();
    $('.slider').show();
  };
  module.projectsController = projectsController;
})(window);
