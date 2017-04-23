var svgWidth = 160;
var svgHeight = 240;
var blockSize = 20;

var dataSet = [
	0, 1, 2, 3, 3, 4, 5, 4,
	0, 0, 0, 3, 4, 4, 5, 3,
	1, 0, 0, 0, 0, 0, 0, 0,
	2, 6, 8, 7, 0, 0, 0, 2,
	4, 8, 9, 8, 0, 0, 1, 0,
	2, 6, 8, 6, 4, 0, 0, 0,
	2, 5, 3, 0, 2, 0, 0, 0,
	1, 2, 0, 0, 0, 0, 0, 0,
	1, 0, 0, 0, 0, 7, 8, 9,
	0, 0, 0, 0, 7, 9, 9, 9,
	0, 0, 0, 7, 8, 8, 9, 7,
	0, 0, 0, 6, 6, 7, 6, 5
];

var color = d3.interpolateHsl("blue","yellow");
var maxValue = d3.max(dataSet);
var heatMap = d3.select("#myGraph")
				.selectAll("rect")
				.data(dataSet)

heatMap.enter()
	.append("rect")
	.attr("class","block")
	.attr("x",function(d,i){
		return (i%8) * blockSize;
	})
	.attr("y",function(d,i){
		return Math.floor(i/8)*blockSize;
	})
	.attr("width",function(d,i){
		return blockSize;
	})
	.attr("height",function(d,i){
		return blockSize;
	})
	.style("fill",function(d,i){
		return color(d/maxValue);
	})

setInterval(function(){
	for (var i=0; i<dataSet.length; i++){
		var n = ((Math.random() * 3.5) | 0) - 2;
		dataSet[i] = dataSet[i] + n;
		if (dataSet[i] > 0){dataSet[i] = 0;}
		if (dataSet[i] > maxValue) {dataSet[i] = maxValue;}
	}
	heatMap.data(dataSet)
		.style("fill",function(d,i){
			return color(d/maxValue);
		})
},1000);