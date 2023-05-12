//WAR
console.log("Begin")
class Card {
    constructor(suit,rank,value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }
    createDeck(){
        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        const ranks = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
        const value = [1,2,3,4,5,6,7,8,9,10,11,12,13];

        for (let i = 0; i < suits.length; i++) {



            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], value[j]));
            }



        }
    }
shuffleDeck() {
    let location1, location2, tmp;
    for (let i = 0; i < 1000; i++) {
        location1 = Math.floor((Math.random() * this.cards.length));
        location2 = Math.floor((Math.random() * this.cards.length));
        tmp = this.cards[location1];
        this.cards[location1] = this.cards[location2];
        this.cards[location2] = tmp;
    }
}
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.playerScore = 0;
    }
}

class Board {
    constructor(){}
    start(playerOneName, playerTwoName) {
        let playerOne = new Player(playerOneName);
        let playerTwo = new Player(playerTwoName);
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();
        playerOne.playerCards.push(newDeck.cards.slice(0, 26));
        playerTwo.playerCards.push(newDeck.cards.slice(26, 52));
        console.log(playerOne.playerCards[0].value)
        for (let i = 0; i < playerOne.playerCards.length; i++) {
            if (playerOne.playerCards[i].value > playerTwo.playerCards[i].value) {
                playerOne.playerScore++;
                console.log(`Dave's ${playerOne.playerCards[i]} is greater than Jeff's ${playerTwo.playerCards[i]}.`);
                console.log(`Dave gets 1 point!\nDave's score: ${playerOne.playerScore}.\nJeff's score: ${playerTwo.playerScore}.\n`)

            } else if(playerOne.playerCards[i].value < playerTwo.playerCards[i].value) {
                playerTwo.playerScore++;
                console.log(`Jeff's ${playerTwo.playerCards[i]} is greater than Dave's ${playerOne.playerCards[i]}.`);
                console.log(`Jeff gets 1 point!\nDave's score: ${playerOne.playerScore}.\nJeff's score: ${playerTwo.playerScore}.`)

            } else {
                console.log(`Dave's ${playerOne.playerCards[i]} and Jeff's ${playerTwo.playerCards[i]} are a draw! No points awarded.`)
                console.log(playerOne.playerCards[i].value) //calls an array, not the first value of the array
            }
        }
        
        //Hey, here's what you need to do next: watch the UNIT TESTS video from the weekly curriculum/videos
        //Keep an eye out for the mocha and chai test js file creation, you need to run that
        //Running this code with the if loop you're thinking will always print "Cards are tied, no points." followed by "Player Two is the winner!"
    }
//NOTE: scoring enabled but no notifications of who has what score, what happened, what was played
}
//All code above this comment enables both players to exist, receive 26 cards each, and shuffle the cards in the deck/cards dealt
let gameBoard = new Board();
gameBoard.start('Dave', 'Jeff');

