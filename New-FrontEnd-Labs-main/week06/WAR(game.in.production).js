//WAR
class Card {
    constructor(suit,rank,value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
let newCard = new Card("Spades","Ace",1);

class Deck {
    constructor() {
        this.cards = [];
    }
    createDeck(){
        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        const ranks = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
        const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
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
    }
}

class Board {
    constructor() {
        this.middleCards = [];
        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();
        this.players[0].playerCards = newDeck.cards.slice(0, 26);
        this.players[1].playerCards = newDeck.cards.slice(26, 52);
    }
}

let gameBoard = new Board();
gameBoard.start('Player One', 'Player two');
console.log(gameBoard.players);