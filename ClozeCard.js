// Constructor function for creating cloze-deletion flashcards
var ClozeCard = function(text, cloze) {
	this.cloze = cloze;
	this.fullText = text;
	this.partial = this.fullText.replace(this.cloze,'').trim();	
}
Error.prototype.name = "Cloze-Error";
Error.prototype.message = "The cloze deletion does not appear in the input text.";

// Exporting our ClozeCard constructor.
module.exports = ClozeCard;