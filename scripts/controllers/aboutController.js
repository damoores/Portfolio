(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#projects').hide();
    $('#contact').hide();
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
