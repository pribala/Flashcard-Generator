// Constructor function for creating cloze-deletion flashcards
var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

// Exporting our ClozeCard constructor.
module.exports = ClozeCard;