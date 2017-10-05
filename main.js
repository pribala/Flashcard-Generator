// Requiring our card modules exported from BasicCard.js and ClozeCard.js
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
var newCard = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var brokenCloze = new ClozeCard("This doesn't work", "oops");
