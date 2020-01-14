// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody')

data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var button = d3.select("#filter-btn");

  button.on("click", function () {

	d3.event.preventDefault();

	var inputElement = d3.select("#datetime");

	var inputValue = inputElement.property("value");

	var filteredData = data.filter(data => data.datetime === inputValue);
	buildTable(filteredData);

});

function buildTable(dataFilter) {

	tbody.html("");
	dataFilter.forEach((ufoSighting) => {
		var row = tbody.append("tr");
		Object.entries(ufoSighting).forEach(([key, value]) => {
			var cell = tbody.append("td");
			cell.text(value);
		});
	});
}
