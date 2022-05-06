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

// console.log(module.exports);