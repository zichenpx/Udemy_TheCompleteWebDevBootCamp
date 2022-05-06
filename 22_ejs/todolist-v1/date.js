// jshint esversion:6

exports.getDate = function(){
    const today = new Date();
    // Use javascript to show the Date
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    let day = today.toLocaleDateString("en-US", options);

    return day;

    // 3. - Start

    // - End

    // let currentDay = today.getDay();
    // let day = "";

    // 1. weekday vs weekend - Start
    // if (currentDay === 0){
    //     day = "Weekend";
    //     // render "object"
    //     // res.sendFile(__dirname + "/weekend.html");
    // } else {
    //     day = "Weekday";
    //     // res.sendFile(__dirname + "/weekdays.html");
    // }
    // weekday vs weekend -End

    // 2.Everyday - Start
    // switch(currentDay){
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         // default case should not be triggered, but it is a good idea to log what is happending!
    //         console.log("Error: current day is equal to: " + currentDay);
        // Everyday - End
    // }
}


module.exports.getDay = getDay;

function getDay(){
    let today = new Date();
    // Use javascript to show the Date
    let options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);

    // return day;
}

console.log(module.exports);