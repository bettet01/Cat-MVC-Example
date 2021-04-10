
class FurView {

    async askFurColor(name) {
        return this.askQuestion(`What is ${name}'s fur color? `);
    }

    async askFurLength(name) {
        return this.askQuestion(`How long is ${name}'s fur? `);
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


module.exports = {FurView};