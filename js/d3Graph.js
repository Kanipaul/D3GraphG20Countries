//Defining the D3 margin

var margin={ top:20, right:10, bottom: 100, left:40},
	width=700 - margin.right-margin.left,
	height=500- margin.top-margin.bottom;


//define svg

var svg_population=d3.select('#population')
		.append('svg')
		.attr({

		"width": width + margin.right + margin.left,
		"height": height + margin.top + margin.bottom

		})

		.append('g')
			.attr("transform", "translate(" + margin.left + ',' + margin.right + ')');


//Scale and Axis

var xScale=d3.scale.ordinal()
.rangeRoundBands([0,width], 0.1);

var yScale=d3.scale.linear()
.range([height, 0]);

//define axis

var xAxis=d3.svg.axis()
	.scale(xScale)
	.orient("bottom");

var yAxis=d3.svg.axis()
	.scale(yScale)
	.orient("left");

//Getting JSON data
d3.json("json/Population.json", function(error, data){

	if(error){
	console.log("Error");
	}

	data.forEach(function(d){
		d.population2013=+ d.population2013;
		d.country=d.country;
		console.log(d.popultion2013);

	});

	data.sort(function(a,b){
	return b.population2013- a.population2013;
	});



// specify the domains of x and y scales

xScale.domain(data.map(function(d){

	return d.country;
}));

yScale.domain([0, d3.max(data, function(d){
	return d.population2013;

})]);

//draw the bars

svg_population.selectAll('rect')
	.data(data)
	.enter()
	.append('rect')
	.attr("height", 0)
	.attr("y", height)
	.transition().duration(3000)
	.delay(function(d,i){
		return i*200;
	})
	.attr({

		'x': function(d){
		return xScale(d.country);
		},

		'y': function(d){

		return yScale(d.population2013);
		},
		"width": xScale.rangeBand(),
		"height": function(d){

		return height-yScale(d.population2013);
		}

	});
	
// append x axis and y axis

svg_population.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll('text')
    .attr("transform", "rotate(-60)")
    .attr("dx","-0.8em")
    .attr("dy", "-0;.25em")
    .style("text-anchor","end")
    .style("font-size", "12px");

svg_population.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .style("font-size", "12px");

});

/* ----------------------------------------------- GDP GRaph-------------------------------------------------------------------------- */

// Define D3 margin
var svg_gdp=d3.select('#gdp')
		.append('svg')
		.attr({

		"width": width + margin.right + margin.left,
		"height": height + margin.top + margin.bottom

		})

		.append('g')
			.attr("transform", "translate(" + margin.left + ',' + margin.right + ')');


//Scale and Axis

var xScale=d3.scale.ordinal()
.rangeRoundBands([0,width], 0.2,0.2);

var yScale=d3.scale.linear()
.range([height, 0]);

//define axis

var xAxis=d3.svg.axis()
	.scale(xScale)
	.orient("bottom");

var yAxis=d3.svg.axis()
	.scale(yScale)
	.orient("left");


d3.json("json/GDP.json", function(error, data){

	if(error){
	console.log("Error");
	}

	data.forEach(function(d){
		d.GDP2013=+ d.GDP2013;
		d.country=d.country;
		console.log(d.GDP2013);

	});

	data.sort(function(a,b){
	return b.GDP2013- a.GDP2013;
	});



// specify the domains of x and y scales

xScale.domain(data.map(function(d){

	return d.country;
}));

yScale.domain([0, d3.max(data, function(d){
	return d.GDP2013;

})]);

//draw the bars

svg_gdp.selectAll('rect')
	.data(data)
	.enter()
	.append('rect')
	.attr("height", 0)
	.attr("y", height)
	.transition().duration(3000)
	.delay(function(d,i){
		return i*200;
	})
	.attr({

		'x': function(d){
		return xScale(d.country);
		},

		'y': function(d){

		return yScale(d.GDP2013);
		},
		"width": xScale.rangeBand(),
		"height": function(d){

		return height-yScale(d.GDP2013);
		}

	});

// append x axis and y axis

svg_gdp.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll('text')
    .attr("transform", "rotate(-60)")
    .attr("dx","-0.8em")
    .attr("dy", "-0;.25em")
    .style("text-anchor","end")
    .style("font-size", "12px");

svg_gdp.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .style("font-size", "12px");

});

/* ----------------------------------------------------- PP Graph------------------------------------------------------------------------------ */

//Define D3 margin

var svg_pp=d3.select('#pp')
		.append('svg')
		.attr({

		"width": width + margin.right + margin.left,
		"height": height + margin.top + margin.bottom

		})

		.append('g')
			.attr("transform", "translate(" + margin.left + ',' + margin.right + ')');


//Scale and Axis

var xScale=d3.scale.ordinal()
.rangeRoundBands([0,width], 0.2,0.2);

var yScale=d3.scale.linear()
.range([height, 0]);

//define axis

var xAxis=d3.svg.axis()
	.scale(xScale)
	.orient("bottom");

var yAxis=d3.svg.axis()
	.scale(yScale)
	.orient("left");


d3.json("json/PurchasingPower.json", function(error, data){

	if(error){
	console.log("Error");
	}

	data.forEach(function(d){
		d.PurchasingPower2013=+ d.PurchasingPower2013;
		d.country=d.country;
		console.log(d.PurchasingPower2013);

	});

	data.sort(function(a,b){
	return b.PurchasingPower2013- a.PurchasingPower2013;
	});



// specify the domains of x and y scales

xScale.domain(data.map(function(d){

	return d.country;
}));

yScale.domain([0, d3.max(data, function(d){
	return d.PurchasingPower2013;

})]);

//draw the bars

svg_pp.selectAll('rect')
	.data(data)
	.enter()
	.append('rect')
	.attr("height", 0)
	.attr("y", height)
	.transition().duration(3000)
	.delay(function(d,i){
		return i*200;
	})
	.attr({

		'x': function(d){
		return xScale(d.country);
		},

		'y': function(d){

		return yScale(d.PurchasingPower2013);
		},
		"width": xScale.rangeBand(),
		"height": function(d){

		return height-yScale(d.PurchasingPower2013);
		}

	});


// append x axis and y axis

svg_pp.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll('text')
    .attr("transform", "rotate(-60)")
    .attr("dx","-0.8em")
    .attr("dy", "-0;.25em")
    .style("text-anchor","end")
    .style("font-size", "12px");

svg_pp.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .style("font-size", "12px");

});
