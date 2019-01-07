var cards = [
{rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{rank: "king",
suit: "hearts",
cardImage: "images/kind-of-hearts.png"
},
{rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push (cards[cardId].rank);
if (cardsInPlay.length === 2); 
	(cardsInPlay[0] === cardsInPlay[1]);
alert("You found a match!");
alert("Sorry, try again.");	
checkForMatch();
};
flipCard(0);
flipCard(2);
console.log(cardImage);
console.log(suit);