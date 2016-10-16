var buildify = require('buildify');

var commandFor = function (pages) {
  var commands = [];
  pages.forEach(function(pageData, index, pages) {
    commands.push(
      CommandBuilder.mustacheCommand()
      .withPartials(pageData.partials)
      .withModel(pageData.model)
      .theTemplate(pageData.target)
      .to(pageData.out)
    )
  });
  return commands;
}

var CommandBuilder = {
  mustacheCommand: function () {
    return withPartials;
  }
};

var withPartials = {
  baseCommand: "mustache ",
  withPartials: function (partials) {
    return withDataModel(this.baseCommand + partials.join(" "));
  }
};

var withDataModel = function (command) {
  function generateModel(rawModel) {
    if(rawModel.partials.length == 0) return;
    buildify()
      .concat(rawModel.partials)
      .wrap('tpl/page-data/template.json')
      .save(rawModel.name);
  }
  return {
    baseCommand: command + " ",
    withModel: function (model) {
      generateModel(model);
      return template(this.baseCommand  + model.name);
    }
  };
};

var template = function (command) {
  return {
    baseCommand: command + " ",
    theTemplate: function (templatePath) {
      return to(this.baseCommand + templatePath);
    }
  }
}

var to = function (command) {
  return {
    baseCommand: command + " ",
    to: function (outPutFile) {
      return this.baseCommand + " > " + outPutFile;
    }
  }
}



module.exports = commandFor;
