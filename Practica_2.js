//Orders expected for the day
let expectedOrders = 15;
// Real daily orders
let dailyOrders = 21;
// create var for the number of the day
let day = 9;
function comparingOrders(){
    //if daily orders > expected orders
if ( dailyOrders > expectedOrders) {
    console.log("Increase daily capacity");
} else {
 // else daily orders < expected orders
    console.log("Reduce daily capacity");
}
}


//function to compare the day odd or even
function dayOddOrEven() {
    if(day % 2 == 0){
    console.log("Today is an even day, is expected a lot of work");
    // console.log("Tomorrow will be a relax day");
} else {
    console.log("Today is an odd day, not too much work expected");
    // console.log("Tomorrow will be a hard day");
}
}


//When on a odd number & expected orders > daily orders...
//send a message that tomorrow will be a hard day

function oddDayAndExpectedVsDaily () {

    if (day % 2!=0 && dailyOrders>expectedOrders){
        console.log("Tomorrow there will be a lot of work");
    } else {}
}

//Call functions 1. Expected orders 2. Day Even or Odd 3. Odd day and daily orders>expected
//Fucntions called at the end (best pract)
comparingOrders(expectedOrders, dailyOrders);
dayOddOrEven (day);
oddDayAndExpectedVsDaily(day,expectedOrders,dailyOrders);

