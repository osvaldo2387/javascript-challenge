// from data.js
var tableData = data;

// YOUR CODE HERE!

function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  // reset table
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // display every UFO event 
  console.log(tableData);
  tableDisplay(tableData);
  
  // Button
  var button = d3.select("#filter-btn");
  
  // do the filtering and show the events in the date
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      var filteredData = tableData;
    } else {
      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
  
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No records found for this date</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });