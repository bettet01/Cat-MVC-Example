const {Cat, Fur} = require("../models/cat");

class CatView {

    intro() {
        console.log("Welcome to the Cat Library!");
    }

    mainPage() {
        console.log("Please make a selection from one of the following choices: ");
        console.log('1. Create Cat')
        console.log('2. Show Cats');
        console.log('3. Get Cat Info');
        console.log('4. Delete Cat');
        console.log('5. Exit')
        return this.askQuestion("Choice?: ")
    }

    async askCatName() {
        return this.askQuestion("What is this cat's name? ")
    }

    async askCatEyeColor(name) {
        return this.askQuestion(`What is this ${name}'s eye color? `);
    }

    async askCatGender(name) {
        return this.askQuestion(`What is this ${name}'s gender? `);
    }

    async askCatDeclawed(name) {
        return this.askQuestion(`Is ${name} declawed? (please type true or false): `);
    }

    confirmDelete(name) {
        console.log(`${name} successfully deleted`)
        console.log('------------')
    }

    deleteError() {
        console.log('something went wrong. unable to delete.')
    }

    showCatNames(cats) {
        console.log("Here as the cats currently in the library")
        cats.forEach((cat) => {
            console.log(cat.getName());
        })
        console.log('------------')
    }

    displayCat(cat) {

        console.log(`Name: ${cat.getName()}`);
        console.log(`Gender: ${cat.getGender()}`);
        console.log(`Eye Color: ${cat.getEyeColor()}`);
        console.log(`Declawed? ${cat.getName() === 'true' ? 'Yes' : 'No'}`);
        console.log(`Fur Color: ${cat.getFur().getColor()}`);
        console.log(`Fur Length: ${cat.getFur().getLength()}`);
        console.log('------------')
    }

    findError() {

        console.log("Unable to locate requested cat.")
        console.log('------------')
    }


    sayGoodBye() {
        console.log("Thanks! Come Again!")
    }

    askQuestion(query) {
        const readline = require('readline');

        let rl = null;
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        return new Promise(resolve => rl.question(query, ans => {
            rl.close();
            resolve(ans);
        }))
    }
}


module.exports = {CatView};