// Constructor function for creating cloze-deletion flashcards
var ClozeCard = function(text, cloze) {
	// Implement scope-safe constructors
	if(this instanceof ClozeCard) {
		this.cloze = cloze;
		this.fullText = text;
		this.partial = "";
		this.init();
	}else {
		return new ClozeCard(text, cloze);
	}	
}	
Error.prototype.name = "Cloze-Error";
Error.prototype.message = "The cloze deletion does not appear in the input text.";
ClozeCard.prototype.init = function() {
	this.partial = this.fullText.replace(this.cloze,'.....').trim();
	try{
		if((this.fullText).indexOf(this.cloze) === -1){
	  		throw new Error();
	  	}else {
	  		console.log("\n=======================================================================\n");
			console.log("Full Text: " + this.fullText);
			console.log("Cloze-deletion: " + this.cloze);
			console.log("Partial text: " + this.partial);
			console.log("\n=======================================================================\n");	
	  	}
	}catch(e){
  		console.log("\n==================================================================\n");
  		console.log(e.name + ': ' + e.message);
  		console.log("\n==================================================================\n");
  	}
}

// Exporting our ClozeCard constructor.
module.exports = ClozeCard;