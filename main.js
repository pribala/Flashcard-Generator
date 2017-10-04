// Requiring our card modules exported from BasicCard.js and ClozeCard.js
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");
try {
	var newCard = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
  	if((newCard.fullText).indexOf(newCard.cloze) === -1){
  		throw new Error();
  	}else {
  		console.log("\n=======================================================================\n");
  		console.log("Full Text: " + newCard.fullText);
  		console.log("Cloze-deletion: " + newCard.cloze);
  		console.log("Partial text: " + newCard.partial);
		console.log("\n=======================================================================\n");	
  	}
} catch (e) {
	console.log("\n==================================================================\n");
  	console.log(e.name + ': ' + e.message);
  	console.log("\n==================================================================\n");
}

