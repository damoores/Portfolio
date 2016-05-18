function Project (info) {
  for (keys in info) {
    this[keys] = info[keys];
  };
}

Project.all = [];

Project.prototype.toHtml = function(scriptTemplateId) {
  var template = Handlebars.compile((scriptTemplateId).html());
  return template(this);
};

Project.loadAll = function(dataWePassIn) {
  dataWePassIn.forEach(function(item) {
    Project.all.push(new Project(item));
  });
};

Article.fetchAll = function () {
  if (localStorage.projectData) {
    Project.loadAll(JSON.parse(localStorage.projectData));
    projectView.initIndexPage();
  } else {
    $.getJSON('data/projectData.json', function(data){
      Project.loadAll(data);
      localStorage.setItem('projectData', JSON.stringify(data));
      projectView.initIndexPage();
    });
  }
};


projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
