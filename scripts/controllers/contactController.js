(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('#about').hide();
    $('#projects').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
