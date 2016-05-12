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
  var $newProject = $('article.template').clone();

  $newProject.find('#project-title').text(this.title);
  $newProject.find('.category').text(this.category);
  $newProject.find('.language').text(this.language);
  $newProject.find('.client').text(this.client);
  $newProject.find('.project-body').html(this.description);

  $newProject.append('<hr>');
  $newProject.removeClass('template');
  return $newProject;
};

ourLocalData.forEach(function(item) {
  projects.push(new Project(item));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
