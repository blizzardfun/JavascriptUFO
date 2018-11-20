// from data.js
var tableData = data;

var submitDate = d3.select("#filter-btn-date");
submitDate.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the date input element and get the value
    var inputDateItem=d3.select("#datetime");
    var inputDate=inputDateItem.property("value");

    var dateTable=tableData.filter(entry => entry.datetime===inputDate);
  
    var resultTable=d3.select("#ufo-table")

    dateTable.forEach(function(entry) {
        var row=resultTable.append("tr");
        Object.entries(entry).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    
    })
});