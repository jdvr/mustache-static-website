var generationData = {
    partials: [
        "-p tpl/partials/head.mustache",
        "-p tpl/partials/nav.mustache",
        "-p tpl/partials/budget-calculator.mustache"
    ],
    model: {
        name: "views/index/es/view.json",
        //the order is important on this partials
        partials: []
    },
    target: "tpl/index.mustache",
    out: "index.html"
};

module.exports = generationData;
