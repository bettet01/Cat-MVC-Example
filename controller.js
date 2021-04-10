const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const {Cat, Fur} = require("./models/cat");

// Dao stands for Data Access Object, which is where we'll be keeping our cat data in memory
class CatController {
    exit = false

    constructor(catDao, catView, furView) {
        this.catDao = catDao;
        this.catView = catView;
        this.furView = furView;
    }

    async start() {
        this.catView.intro();
        while (!this.exit) {
            const selection = await this.catView.mainPage();

            if (selection === "1") {
                await this.createCat();
            }
            if (selection === "2") {
                this.showCats();
            }
            if (selection === "3") {
                await this.getCatInfo();
            }
            if (selection === "4") {
                await this.deleteCat();
            }
            if (selection === '5') {
                this.exit = true;
            }
        }
        this.catView.sayGoodBye();
    }


    async createCat() {
        const catName = await this.catView.askCatName();
        const eyeColor = await this.catView.askCatEyeColor(catName);
        const gender = await this.catView.askCatGender(catName);
        const declawed = await this.catView.askCatDeclawed(catName);
        const furColor = await this.furView.askFurColor(catName);
        const furLength = await this.furView.askFurLength(catName);

        const fur = new Fur(furColor, furLength);
        const newCat = new Cat(catName, gender, eyeColor, declawed, fur);
        this.catDao.addCat(newCat);
    }

    showCats() {
        this.catView.showCatNames(this.catDao.getCats());
    }

    async getCatInfo() {
        const catName = await this.catView.askCatName();
        try {
            const cat = this.catDao.findCatByName(catName);
            this.catView.displayCat(cat);
        } catch (e) {
            this.catView.findError();
        }
    }

    async deleteCat() {
        const catName = await this.catView.askCatName();
        try {
            this.catDao.deleteCat(catName);
            this.catView.confirmDelete(catName);
        } catch (e) {
            this.catView.deleteError();
        }

    }
}


module.exports = {CatController};