var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25
];

var w = 500;
var h = 200;
var barPadding = 1;
var hScale = d3.scale.linear()
    .domain([0, 30])
    .range([0, h]);
var cScale = d3.scale.linear()
    .domain([0, 30])
    .range([0, 255])
var color = d3.scale.category20();

// SVG 要素の生成
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return i * (w / dataset.length);
    })
    .attr("y", function(d) {
        return h - hScale(d);
    })
    .attr("width", function(d, i) {
        return w / dataset.length - barPadding;
    })
    .attr("height", function(d) {
        return hScale(d);
    })
    // .attr("fill", function(d) {
    //     return "rgb(0,0," + d * 10 + ")";
    // })
    .attr("fill",function(d,i){
      return color(i);
    });
