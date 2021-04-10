
// this performs crud operations for our "Database"
class CatDao {
    constructor() {
        this.cats = [];
    }

    // create
    addCat(cat) {
        this.cats.push(cat);
    }

    // read
    getCats() {
        return this.cats;
    }

    findCatByName(name) {
        for (const cat in this.cats) {
            if (this.cats[cat].getName() === name) {
                return this.cats[cat];
            }
        }
    }

    //update
    editCatByName(name, newCat) {
        for (const cat in this.cats) {
            if (this.cats[cat].getName() === name) {
                this.cats[cat] = newCat;
            }
        }
    }

    // delete
    deleteCat(name) {
        for (const cat in this.cats) {
            if (this.cats[cat].getName() === name) {
                delete this.cats[cat];
            }
        }
    }
}

module.exports = {CatDao};