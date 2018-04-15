//wrapper that extends functionality
var $ = function(id) {
    return document.getElementById(id);
};

//Function expression that receives user input and calculates a value based on those parameters.
var calc_value = function(investment,rate,years) {
    var theValue = investment;
    for (var i = 1; i <= years; i++ ) {
        theValue += theValue * rate / 100;
    }
    theValue = theValue.toFixed(2);
    return theValue;
};

//Event handler with data validation
var processEntries = function() {
    var investment = parseFloat( $("investment").value );
    var rate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );
    var error = "";

    if (isNaN(investment) || investment <= 0 || investment > 100000) {
    	error = "Investment must be a number greater than zero and less than or equal to 100,000";
    	$("investment").focus();
    }
    else if (isNaN(rate) || rate <= 0 || rate > 15) {
    	error = "Rate must be a number greater than zero and less than or equal to 15";
    	$("annual_rate").focus();
    }
    else if (isNaN(years) || years <= 0 || years > 50) {
    	error = "Years must be a number greater than zero and less than 50";
    	$("years").focus();
    }
    
    if (error == "") {
        $("future_value").value = calc_value(investment,rate,years);
    }
    else {
    	alert(error);
    }
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
};