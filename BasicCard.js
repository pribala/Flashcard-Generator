// Constructor function for creating basic flashcard objects
var BasicCard = function(front, back) {
	if(this instanceof BasicCard) {
		this.front = front;
		this.back = back;
	}else {
		return new BasicCard(front, back);
	}		
}

// Function to print basic card details to the console.
BasicCard.prototype.printInfo = function() {
	console.log("\n================================================\n");
	console.log("Front: "+this.front);
	console.log("Back: "+this.back);
	console.log("\n================================================\n");
}

// Exporting our BasicCard constructor.
module.exports = BasicCard;