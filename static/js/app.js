// from data.js
var tableData = data;

var submitDate = d3.select("#filter-btn");
submitDate.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the date input element and get the value
    var inputDateItem=d3.select("#datetime");
    var inputDate=inputDateItem.property("value");
console.log("date:",inputDate);
    //filter by date
    if (inputDate===""){
        var dateTable=tableData;
    } else {
console.log("filtering date");
        var dateTable=tableData.filter(entry => entry.datetime === inputDate);   
    }
        // Select the city input element and get the value
    var inputCityItem=d3.select("#city");
    var inputCity=inputCityItem.property("value")
console.log("city:",inputCity); 
    //filter by city
    if (inputCity ===""){
        var cityTable=dateTable;
    } else {
console.log("filtering city");
        var cityTable=dateTable.filter(entry=> entry.city === inputCity); 
    }
    // Select the state input element and get the value
    var inputStateItem=d3.select("#state");
    var inputState=inputStateItem.property("value")
console.log("state:",inputState); 
    //filter by state
    if (inputState ===""){
        var stateTable=cityTable;
    } else {
console.log("filtering state");
        var stateTable = cityTable.filter(entry=> entry.state === inputState); 
    }
    // Select the shape input element and get the value
    var inputShapeItem=d3.select("#shape");
    var inputShape=inputShapeItem.property("value")
console.log("shape:",inputShape); 
    //filter by shape
    if (inputShape ===""){
        var shapeTable=stateTable;
    } else {
console.log("filtering shape");
        var shapeTable=stateTable.filter(entry=> entry.shape===inputShape); 
    }
  
    // get result table and clear it
    var resultTable=d3.select("#ufo-table")
    d3.selectAll(".result-row").text("");

    //add data to result table rows
    shapeTable.forEach(function(entry) {
        var row=resultTable.append("tr").attr("class","result-row");
        Object.entries(entry).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    
    })

    
    }      
);