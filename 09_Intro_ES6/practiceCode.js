/*104-variables*/
let myName = "Angela"
let yourName = prompt("What is your name?")
alert("My name is " + myName + ", welcome to my course " + yourName + "!")

/*109-word.length*/
let tweet = prompt("Compose your tweet:");
let tweetCount = tweet.length;
let tweetShow = tweetCount.slice(0,140);
let remainingTweet = 140 - tweetCount;
alert("You have written " + tweetCount + " characters, you have " + remainingTweet + " characters remaining." );

/*110-slice(x,y)*/
let tweet = prompt("Compose your tweet:");
let tweetUnder140 = tweet.slice(0,140);
alert(prompt("Compose your tweet:").slice(0,140));
//OR
alert(tweetUnder140);

//My ADVANCED
let tweet = prompt("Compose your tweet:");
let tweetCount = tweet.length;
let tweetUnder140 = tweet.slice(0,140);
let tweetUnder140Length = tweetUnder140.length;
alert("Tweet under 140 chr: " + tweetUnder140);
alert("Tweet count: " + tweetCount);
let remainingCharacters = 140 - tweetUnder140Length;
//alert(remainingCharacters);
if (tweetCount < 140){
 	alert("You have written " + tweetCount + " characters, you have " + remainingCharacters + " characters remaining." );
 } else if (tweetCount == 140){
	 alert("You have written " + tweetCount + " characters, you have 0 character remaining." );
    }
	 else
		 alert("You have written over 140 characters, you have no characters remaining." );
	 
/*111-word.toUpperCase(), word.toLowerCase()*/
//1 Create a var that stores the name that user enters via prompt.
let name = prompt("What's your name?");
//2 Capitalise the first letter of the name.
name = name.slice(0,1).toUpperCase() + name.slice(1,100).toLowerCase();
//3 We use the capitalised version of their name to greet them using an alert.
alert(name);

// My ADVANCED
let name = prompt("What's your name?");
console.log(name);
let nameSplit = name.split(" ");
console.log(nameSplit);
let nameSplitLength = nameSplit.length;
console.log(nameSplitLength);
let fullName = "";
for (i=0;i<nameSplitLength;i++){
	let splitiLength = nameSplit[i].length;
	console.log(nameSplit);
	fullName = fullName + " " + nameSplit[i].slice(0,1).toUpperCase() + nameSplit[i].slice(1,splitiLength).toLowerCase();
}
console.log(typeof(fullName));
console.log(fullName);
alert("Hello, " + fullName + ".");

/*116-The Karel Robot*/
//move from left bottom to right top
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
   moveForward4Times();
   turnLeft();
   moveForward4Times();
}

function moveForward4Times(){
   move();
   move();
   move();
   move();
}

//Put Beeper
function main(){
   //your code here
   putBeeper();
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}

//Put Beeper clear style
function main(){
   //your code here
   putBeeper();
   moveForward();
   moveForward();
   moveForward();
   moveForward();
}

function diagonalMoveAndBeeper(){
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}

//Chessboaed pattern
function main(){
   //your code here
   putBeeper();
   moveForwardAnd2Beepers();
   turnLeftAndBeeper();
   moveForwardAnd1Beeper();
   turnRightAndBeeper();
   moveForwardAnd2Beepers();
   turnLeftAndBeeper();
   moveForwardAnd1Beeper();
   turnRightAndBeeper();
   moveForwardAnd2Beepers();
}

function moveForwardAnd2Beepers(){
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function moveForwardAnd1Beeper(){
   move();
   move();
   putBeeper();
}

function turnLeftAndBeeper(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
}

function turnRightAndBeeper(){
   move();
   turnRight();
   move();
   putBeeper();
   turnRight();
}

/*119-parameters and arguments*/


























