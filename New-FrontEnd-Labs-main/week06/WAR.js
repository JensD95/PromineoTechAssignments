//WAR
//Card class declaration with constructor parameters to hold the suit, rank, and value of each card
class Card {
    constructor(suit,rank,value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
//Deck class declaration with methods to create a deck and shuffle the created deck
//Suits, ranks, and values will be consistent across all suit creation events
//Deck is shuffled upon each execution of the code
class Deck {
    constructor() {
        this.cards = [];
    }
    //This is the createDeck method, used to establish a standard deck of 52 playing cards
    //As of this method's execution, a deck will be created containing the ascending values for each suit and rank (13x4, ranks x suits)
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
    //This is the shuffleDeck method, used to shuffle the deck into a random order upon each code execution
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
//Class declaration for a Player taking a name for the constructor and holding a player specific deck array and score number value
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.playerScore = 0;
    }
}
/*Class declaration for the GameOfWar. This is where the core of the game exists.
This class construction handles the creation of both player objects and the deck object.
Additionally, this class creates the deck of cards and shuffles it each execution.
Finally, this class runs the game WAR after the above steps have been successfully executed.
This game of WAR will run with the same conditions every game, BUT . . .
with a random deck each game, an unpredictable outcome each execution, and dynamic character names!
*/
class GameOfWar {
    constructor(){}
    start(playerOneName, playerTwoName) {
        let playerOne = new Player(playerOneName);
        let playerTwo = new Player(playerTwoName);
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();
        playerOne.playerCards = newDeck.cards.slice(0, 26);
        playerTwo.playerCards = newDeck.cards.slice(26, 52);
        console.log(`WAR\n\n${playerOne.playerName} vs ${playerTwo.playerName}\n`)
        for (let i = 0; i < playerOne.playerCards.length; i++) {
            if (playerOne.playerCards[i].value > playerTwo.playerCards[i].value) {
                playerOne.playerScore++;
                console.log(`${playerOne.playerName}'s ${playerOne.playerCards[i].rank} of ${playerOne.playerCards[i].suit} is greater than ${playerTwo.playerName}'s ${playerTwo.playerCards[i].rank} of ${playerTwo.playerCards[i].suit}.`);
                console.log(`${playerOne.playerName} gets 1 point!`)
                console.log(`${playerOne.playerName}'s Score: ${playerOne.playerScore}.\n${playerTwo.playerName}'s Score: ${playerTwo.playerScore}.\n`)

            } else if(playerOne.playerCards[i].value < playerTwo.playerCards[i].value) {
                playerTwo.playerScore++;
                console.log(`${playerTwo.playerName}'s ${playerTwo.playerCards[i].rank} of ${playerTwo.playerCards[i].suit} is greater than ${playerOne.playerName}'s ${playerOne.playerCards[i].rank} of ${playerOne.playerCards[i].suit}.`);
                console.log(`${playerTwo.playerName} gets 1 point!`)
                console.log(`${playerOne.playerName}'s Score: ${playerOne.playerScore}.\n${playerTwo.playerName}'s Score: ${playerTwo.playerScore}.\n`)

            } else {
                console.log(`${playerOne.playerName} ${playerOne.playerCards[i].rank} of ${playerOne.playerCards[i].suit} and ${playerTwo.playerName}'s ${playerTwo.playerCards[i].rank} of ${playerTwo.playerCards[i].suit} are a draw! No points awarded.`)
                console.log(`${playerOne.playerName}'s Score: ${playerOne.playerScore}.\n${playerTwo.playerName}'s Score: ${playerTwo.playerScore}.\n`)
            }
        }
        if (playerOne.playerScore > playerTwo.playerScore) {
            console.log(`\n${playerOneName} is the winner with ${playerOne.playerScore} points!`)
        } else if (playerOne.playerScore < playerTwo.playerScore) {
            console.log(`\n${playerTwoName} is the winner with ${playerTwo.playerScore} points!`)
        } else {
            console.log(`${playerOneName} and ${playerTwoName} finished the game with a draw at ${playerOne.playerScore} points!`)
        }
        
    }
}
//This assigns a new object of the GameOfWar class.
let warGame = new GameOfWar();
//This is the start of the game! Choose your player names in the code below and enjoy the show!
warGame.start('Charles', 'Daisy');