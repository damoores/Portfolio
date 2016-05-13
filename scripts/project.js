var projects = [];

function Project (info) {
  this.title = info.title;
  this.category = info.category;
  this.language = info.language;
  this.client = info.client;
  this.projectUrl = info.projectUrl;
  this.date = info.date;
  this.description = info.description;
}

Project.prototype.toHtml = function() {
  var $source = $('#article-template').html();
  var template = Handlebars.compile($source);

  return template(this);
};

ourLocalData.forEach(function(item) {
  projects.push(new Project(item));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
