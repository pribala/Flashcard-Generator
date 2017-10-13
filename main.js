// Requiring our card modules exported from BasicCard.js and ClozeCard.js
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var newCard = ClozeCard("George Washington was the first president of the United States.", "George Washington");

// Test cases for the Basic and Cloze constructors
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var brokenCloze = new ClozeCard("This doesn't work", "oops");

// Include the inquirer and fs node package for enabling user 
// input and reading & writing to a file.
var inquirer = require("inquirer");
var fs = require("fs");

// Variable keeps count of the number of right answers.
var total = 0;
// Array object to store the objects read from external .json file.
var objArray = [];

// Check to see if cards.json file exists.
// If it exists read the contents and store the 
// objects in the object array.
fs.stat("cards.json", function(err, stat) {
	if(err === null) {
	    fs.readFile("cards.json", "utf8", function(err, data){
		    if(err){
		        console.log(err)
		    }   
		    var objs = JSON.parse(data);
		    //console.log(objs);
		    objs.forEach(function(item){
		    	objArray.push(item);
		    	//console.log(objArray);
		    });	
		});  
	}
});
// Create cards interactively
var askQuestion = function() {
    inquirer.prompt([
      {
        name: "action",
        message: "Do you want to create cards interactively or from file?",
        type: "list",
        choices: ["Interactive", "File"]
      }
    ]).then(function(answers) {
    	if(answers.action === "Interactive"){
	      	//createBasicCard();
	      	console.log("Interactive");
		}else {
			console.log("Creating cards from external file");
			createCards();
		}		
	});
};	

function createCards() {
	fs.readFile("data.json", "utf8", function(err, data){
	    if(err){
	        console.log(err)
	    }  
	    var count = 0;            
	    var objs = JSON.parse(data);
	    objs.forEach(function(item){
	    	if(item.type === "Basic") {
	    		var newBasicCard = new BasicCard(item.question, item.answer);	
	    		newBasicCard.printInfo();
	    		count++;
	    	}else {
	    		var newClozeCard = new ClozeCard(item.text, item.cloze);	
	    		count++; 
	    	}	
	    });
		console.log(count+" cards created");
		inquirer.prompt([
      	{
        	name: "userInput",
        	message: "Do you want to play the game?",
        	type: "list",
        	choices: ["Yes", "No"]
      	}
    	]).then(function(answers) {
    		if(answers.userInput === "Yes"){
    			var count = 0;
	      		//loopThroughQuestions(objs, count);
	      		console.log("Game");
			}else {
				console.log("Bye Bye");
			}		
		});
	});
}
askQuestion();
