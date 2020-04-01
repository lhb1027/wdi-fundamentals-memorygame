let cards = ['queen', 'queen', 'king', 'king']
let cardsInPlay = [];

var cardOne = "queen";
console.log("User flipped " + cardOne);
cardsInPlay.push('cardOne');

var cardTwo = "king";
console.log("User flipped " + cardTwo);
cardsInPlay.push('cardTwo');

if(cardsInPlay.length === 2) {

}

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}








