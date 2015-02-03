// this is a single line comment in javascript

// *  BLOCK COMMENT -  good for whole sections being turned off  */

//VARIABLES

//STRING type of data******************************************
var userName = "cyndy"; //setting a variable

userName = "bob"; //using a variable

// the = is the assigment operator 
var firstName = "cyndy";
var lastName = "eng-dinsel";

//Bad variable names
// var @00hi there
// var 1hi there = "something";
// var time ="12:30";

//USING SINGLE AND DOUBLE QUOTE
var myComment = "who said this:";
var myQuote = '"all the world\'s a stage"'; //single quotes print literal characters.
//var myQuote = "all the world\'s a stage";
//var myQuote = "all the world's a stage";
// var myQuote = "all the &copy; s a stage";
///console.log(myQuote); //shows the value of myComment to the console, when we reload.

//var message = myComment + myQuote;



var message = firstName + " " + lastName; //joining two variables

console.log(message);
//target and repalce elements on the page...
var string1 = document.getElementById("string1");
string1.innerHTML = message;
var imagePath = 'images/water-color/thumbs/artwork_1.jpg';
//console.log(imagePath);
message = message.toUpperCase();
console.log(message);

//dynamically reaching in and replacing the content on the webpage javascript-concepts.html

//**** ARRAY DATA TYPE ***********
//A variable that can hold many values. They are lists.
//create an array
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

//imageList.push("images/oil/thumbs/artwork_8.jpg");

var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute("src", imageList [6]); //update the src attribute of the image

console.log(imageList.length);

//NUMBER ***************************************
var level = 1;
var lives = 3;
var ssNumber = 2342232222; //this is an integer
var cost = 1.50; //this is a float type number
var cost1 = "50"; 
var cost2 = 50; 
var total = Number(cost1) * cost2; //perform math by adding +
console.log(total);

console.log(level);
// don't put quotes around your numbers. it turns it into a string instead of a number. 

//****** BOOLEAN DATA TYPE ******
//true or false, yes or no, 1 or 0
var oldEnough = false;
var hasContent = true;
var age = 10;

//****ifthen statements (branching logic, application logic, business logic)**********
//check the age...

if (age >= 20 && age != 5){  //less than or equal to;
	//too young
	oldEnough = false;
}else{
	oldEnough = true;
}

if (oldEnough == true) {
	// == means is equal to. 
	// = means gets set to .
	//more code here, aka a code block. This block only executes (fires off) if the code in between the if statement is true.
	console.log("wahoo, you may go on the roller coaster ride.");
}else {
	console.log("sad panda, you may not go on the roller coaster ride.")
}

//*******FUNCTIONS********
//creating and calling a function
function dynamicGreeting(){
	//create the built in date object
	var now = new Date();
	var time = now.getHours(); //extract the hours

	if(time < 12){
		alert("goodmorning!");
	}
	if(time ==12){
		alert("time to eat lunch at luna park");
	}
	if(time > 12){
		alert("good evening, the time is ..." + now.toLocaleString());
	}
}

dynamicGreeting();



