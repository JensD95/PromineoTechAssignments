//This is the code to create a menu app
//The app will allow a user to build a band with their chosen names and assign roles by member abilities
//Below is the class declaration for Band
class Band {
    constructor (name, members) {
        this.name = name;
        this.members = [];
    }
    
    addMember(member) {
        if (member instanceof BandMember) {
            this.members.push(member);
        } else {
            throw new error(`You must use only valid names. ${member} is not a valid name, please try again.`)
        }
    }
    describe() {
        return `${this.name} has ${this.members.length} bandmembers.`;
    }
}
//Class declaration for BandMember
class BandMember {
    constructor (name, role) {
        this.name = name;
        this.role = role;
    }
    describe() {
            return `${this.name} is the ${this.role}.`;
    }
}
//Class declaration for Menu
class Menu {
    constructor() {
        this.bands = [];
        this.selectedBand = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createBand();
                    break;
                case '2':
                    this.viewBand();
                    break;
                case '3':
                    this.deleteBand();
                    break;
                case '4':
                    this.showBands();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Thanks for coming!');
    }
    //Main menu function
    showMainMenuOptions() {
        return prompt(`
        Welcome to my band creation menu!
        Follow the indexes listed to interact with the menu.
        To find the index of a band, choose index 4!
        Thanks for coming!
        
         0. Quit
         1. Create Band
         2. View Band
         3. Delete Band
         4. Show Bands
        `);
    }
    //Band member addition or deletion function
    showBandMenuOptions(bandInfo) {
        return prompt(`
        Please use the indexes below to create/delete members.
        
          0. Return
          1. Create Band Member
          2. Delete Band Member

            ${bandInfo}
        `);
    }
    //Name and index display function for all bands currently available
    showBands() {
        let bandString = '';
        for (let i = 0; i < this.bands.length; i++) {
            bandString += i + '. ' + this.bands[i].name + '\n';
        }
        alert(bandString);
    }
    //Band removal function
    deleteBand() {
        let index = prompt("Please enter the index of the band to remove: ");
        if (index > -1 && index < this.bands.length) {
            this.bands.splice(index, 1);
        }
    }
    //Function to access a single band and the band member addition/removal menu
    viewBand() {
        let index = prompt('Which band would you like to view? ');
        if (index > -1 && index < this.bands.length) {
            this.selectedBand = this.bands[index];
            let description = 'Band Name: ' + this.selectedBand.name + '\n';

            for (let i = 0; i < this.selectedBand.members.length; i++) {
                description += i + '. ' + this.selectedBand.members[i].name + ': ' + this.selectedBand.members[i].role + '\n';
            }

            let selection = this.showBandMenuOptions(description);
            switch(selection) {
                case '1': 
                    this.createBandMember();
                    break;
                case '2':
                    this.deleteBandMember();
                    break;
                default:
                    selection = 0;
            }
        }
    }
    //Band member addition function
    createBandMember() {
        let name = prompt("Enter new band member's name: ");
        let role = prompt(`Enter ${name}'s role in the band: `);
        this.selectedBand.members.push(new BandMember(name, role))
    }
    //Band member removal function
    deleteBandMember() {
        let index = prompt("Enter the index corresponding to the band member you're removing: ");
        if (index > -1 && index < this.selectedBand.members.length) {
            this.selectedBand.members.splice(index, 1);
        }
    }
    //Band creation function
    createBand() {
        let name = prompt('What would you like to name this band? ');
        this.bands.push(new Band(name));
    }

    
}

let menu = new Menu();
menu.start();

//Very similar to Suwyn's team menu with slight modifications to terminology
//Total 3 classes declared with 2 arrays, one for band members and another for total bands created
//Omitted prior console.log() narration, as this one is designed to run in a browser
//Tested in a browser, not with node.js