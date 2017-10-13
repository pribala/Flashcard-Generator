# Flashcard-Generator
Backend for a basic flashcard application.  The backend constitutes an API that allows users to create two types of flashcards, Basic and Cloze. The frontend is a command line node application which uses the inquirer package to create the two types of card and run through the cards giving the user the option to answer.

1. Basic flashcards, which have a front, and a back.


2. Cloze-Deleted flashcards, which present partial text, and the full text when the user requests it.


### Cloze Deletions

A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:

"George Washington was the first president of the United States."

... We can create a "cloze deletion" by removing the words "George Washington":

"... was the first president of the United States."


### BasicCard.js:

A Node module that exports a constructor for creating basic flashcards. 
The constructor accepts two arguments: front and back.
It has a method printInfo that displays the card front and back text.

### ClozeCard.js:

A Node module that exports a constructor for creating cloze-deletion flashcards.
The constructor accepts two arguments: text and cloze.

The constructed object has:

1. A cloze property that contains only the cloze-deleted portion of the text.

2. A partial property that contains only the partial text.

3. A fullText property that contains only the full text.

The constructor throws an error when the cloze deletion does not appear in the input text.

### Examples

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"

console.log(firstPresident.front); 

// "George Washington"

console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"

console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.

console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.

console.log(firstPresidentCloze.fullText): "

// Should throw an error because "oops" doesn't appear in "This doesn't work"

var brokenCloze = new ClozeCard("This doesn't work", "oops");

### Bonuses

Users can call the constructor with or without the new keyword.

The frontend uses the inquirer package to give the user a series of options. Based on the user selection, they can

1. Create cards interactively.
The card data is written to cards.json file using the fs package.

2. Create cards from a file all at once.
The cards are created by reading data from data.json using fs package.

3. Create either Basic or Cloze cards

4. Read the data from the .json files and create an interactive game where users can read and answer questions.

5. Generate a score based on number of correct answers.

### Installation

Download the application from GitHub.

[https://github.com/pribala/Flashcard-Generator] 

Install NodeJS on the system and run npm install to install the dependencies.

package.json has the dependencies - the other modules that this module uses.