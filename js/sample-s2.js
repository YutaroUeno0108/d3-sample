var dataSet1 = [
	{
		"商品A" : 120
		,"商品B" : 60
		,"商品C" : 300
	},
	{
		"商品A" : 70
		,"商品B" : 50
		,"商品C" : 80
	},
	{
		"商品A" : 300
		,"商品B" : 30
		,"商品C" : 90
	},
	{
		"商品A" : 80
		,"商品B" : 10
		,"商品C" : 40
	},
	{
		"商品A" : 220
		,"商品B" : 200
		,"商品C" : 150
	},
	{
		"商品A" : 20
		,"商品B" : 60
		,"商品C" : 150
	}
]

var dataSet3 = [
	{
		"商品A" : 90
		,"商品B" : 120
		,"商品C" : 190
	},
	{
		"商品A" : 120
		,"商品B" : 280
		,"商品C" : 250
	},
	{
		"商品A" : 160
		,"商品B" : 230
		,"商品C" : 120
	},
	{
		"商品A" : 170
		,"商品B" : 50
		,"商品C" : 40
	},
	{
		"商品A" : 260
		,"商品B" : 170
		,"商品C" : 110
	}
]

var dataSet2 = [
	{
		"商品A" : 50
		,"商品B" : 20
		,"商品C" : 200
	},
	{
		"商品A" : 20
		,"商品B" : 90
		,"商品C" : 180
	},
	{
		"商品A" : 60
		,"商品B" : 130
		,"商品C" : 190
	},
	{
		"商品A" : 70
		,"商品B" : 90
		,"商品C" : 140
	},
	{
		"商品A" : 80
		,"商品B" : 100
		,"商品C" : 250
	}
]

d3.selectAll("#button1")
	.on("click",function(){
		var dataSet = [];
		for (var i=0; i<dataSet1.length; i++) {
			dataSet.push(dataSet1[i]["商品A"]);
		}
		var barElements = d3.select("#myGraph")
			.selectAll("rect")
			.data(dataSet);
		barElements
			.enter()
			.append("rect")
			.attr("class","bar")
			.attr("width",function(d,i){
				return d;
			})
			.attr("height",20)
			.attr("x",0)
			.attr("y",function(d,i){
				return i * 25;
			});
		barElements
			.attr("width",function (d,i) {
				return d;
			});
		barElements
			.exit()
			.remove();
	})

d3.selectAll("#button2")
	.on("click",function(){
		var dataSet = [];
		for (var i=0; i<dataSet2.length; i++) {
			dataSet.push(dataSet2[i]["商品A"]);
		}
		var barElements = d3.select("#myGraph")
			.selectAll("rect")
			.data(dataSet);
		barElements
			.enter()
			.append("rect")
			.attr("class","bar")
			.attr("width",function(d,i){
				return d;
			})
			.attr("height",20)
			.attr("x",0)
			.attr("y",function(d,i){
				return i * 25;
			});
		barElements
			.attr("width",function (d,i) {
				return d;
			});
		barElements
			.exit()
			.remove();
	})

d3.selectAll("#button3")
	.on("click",function(){
		var dataSet = [];
		for (var i=0; i<dataSet3.length; i++) {
			dataSet.push(dataSet3[i]["商品A"]);
		}
		var barElements = d3.select("#myGraph")
			.selectAll("rect")
			.data(dataSet);
		barElements
			.enter()
			.append("rect")
			.attr("class","bar")
			.attr("width",function(d,i){
				return d;
			})
			.attr("height",20)
			.attr("x",0)
			.attr("y",function(d,i){
				return i * 25;
			});
		barElements
			.attr("width",function (d,i) {
				return d;
			});
		barElements
			.exit()
			.remove();
	})
// d3.selectAll("button")
// 	.on("click",function(){
// 		var csvFile = this.getAttribute("data-src");
// 		d3.csv(csvFile,function(error,data){
// 			var dataSet = [];
// 			for (var i=0; i<data.length; i++) {
// 				dataSet.push(data[i]["商品A"]);
// 			}
// 			d3.select("#myGraph")
// 				.selectAll("rect")
// 				.data(dataSet)
// 				.enter()
// 				.append("rect")
// 				.attr("class","bar")
// 				.attr("width",function(d,i){
// 					return d;
// 				})
// 				.attr("height",20)
// 				.attr("x",0)
// 				.attr("y",function(d,i){
// 					return i * 25;
// 				})
// 		})
// 	})