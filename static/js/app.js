// from data.js
var tableData = data;

var submitDate = d3.select("#filter-btn");
submitDate.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the date input element and get the value
    var inputDate=d3.select("#datetime").property("value");
    //filter by date
    if (inputDate===""){
        var dateTable=tableData;
    } else {
        var dateTable=tableData.filter(entry => entry.datetime === inputDate);   
    }
        // Select the city input element,get the value  and convert to lower case--------------------------------------
    var inputCity=d3.select("#city").property("value").toLowerCase();
    //filter by city
    if (inputCity ===""){
        var cityTable=dateTable;
    } else {
        var cityTable=dateTable.filter(entry=> entry.city === inputCity); 
    }
    // Select the state input element, get the value  and convert to lower case------------------------------------------
    var inputState=d3.select("#state").property("value").toLowerCase();
    //filter by state
    if (inputState ===""){
        var stateTable=cityTable;
    } else {
        var stateTable = cityTable.filter(entry=> entry.state === inputState); 
    }
    // Select the shape input element, get the value and convert to lower case-------------------------
    var inputShape=d3.select("#shape").property("value").toLowerCase();
    //filter by shape
    if (inputShape ===""){
        var shapeTable=stateTable;
    } else {
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
                 // print states and country all caps - capitalize city
            if (key === "state" || key === "country"){
                cell.text(value).style("text-transform" ,"uppercase");    
            } else if (key == "city") {
                cell.text(value).style("text-transform" ,"capitalize");  
            } else {
                cell.text(value);
            }
        })
    
    })

    
    }      
);