/*125-Math.random()*/
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

/*FizzBuzz*/ 
// .push()
// .pop()

let outputs = [];
let count = 1;

function FizzBuzz(){
    

    if (count % 3 === 0 & count % 5 === 0){
        outputs.push("FizzBuzz");
        console.log("FizzBuzz")
    } else if (count % 3 === 0){
        outputs.push("Fizz");
        console.log("Fizz")
    } else if (count % 5 === 0) {
        outputs.push("Buzz");
        console.log("Buzz")
    } else
        outputs.push(count);
        console.log(outputs);
    console.log(outputs.length);
    
    count++;
}

/*133-Who is buying the lunch today?*/
function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    let count = names.length;
    console.log("count: " + count);
    let randomNumber = Math.floor(Math.random() * count) + 1;
    console.log("number: " + randomNumber);
    let whoIsBuyingTheLunch = names[randomNumber-1];
    console.log("who: " + whoIsBuyingTheLunch);
    let formatName = whoIsBuyingTheLunch.slice(0,1).toUpperCase() + whoIsBuyingTheLunch.slice(1,whoIsBuyingTheLunch.length).toLowerCase();
    return formatName + " is going to buy lunch today!"
    console.log(formatName + " is going to buy lunch today!")
/******Don't change the code below*******/    
}

/*134-While Loops*/
let outputs = [];
let count = 1;

function FizzBuzz(){
    while(count<100){
        if (count % 3 === 0 & count % 5 === 0){
            outputs.push("FizzBuzz");
            console.log("FizzBuzz")
        } else if (count % 3 === 0){
            outputs.push("Fizz");
            console.log("Fizz")
        } else if (count % 5 === 0) {
            outputs.push("Buzz");
            console.log("Buzz")
        } else
            outputs.push(count);
        console.log(outputs);
    console.log(outputs.length);
    count++;  
    }
}

/*135-99 bottles challenge*/
var numberOfBottles = 99
while (numberOfBottles > 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

/*138-Fibonacci Challenge*/
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    let output = [];
    //Write your code here:
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        while (n>output.length){
            newNumber = output[output.length-2]+output[output.length-1];
            output.push(newNumber);
        }
    }
    //Return an array of fibonacci numbers starting from 0.
    return output;
    console.log(output);
//Do NOT change any of the code below 👇
}
