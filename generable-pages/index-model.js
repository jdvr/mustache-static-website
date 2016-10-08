var generationData = {};

generationData.partials = [
  "-p tpl/partials/head.mustache",
  "-p tpl/partials/nav.mustache",
  "-p tpl/partials/budget-calculator.mustache"
];
generationData.model = {
    name: "views/index/es/view.json",
    //the order is important on this partials
    partials:[
      ...
    ]
};
generationData.target = "tpl/index.mustache";
generationData.out = "index.html"

module.exports = generationData;
