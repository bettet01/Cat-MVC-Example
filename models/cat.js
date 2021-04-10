class Cat {
    constructor(name, gender, eyeColor, declawed, fur) {
        this.fur = fur
        this.declawed = declawed;
        this.name = name;
        this.eyeColor = eyeColor;
        this.gender = gender;
    }

    getFur() {
        return this.fur;
    }

    getDeclawed() {
        return this.declawed;
    }

    getName() {
        return this.name;
    }

    getEyeColor() {
        return this.eyeColor;
    }

    getGender() {
        return this.gender;
    }


    setFur(fur) {
        this.fur = fur;
    }

    setDeclawed(declawed) {
        this.declawed = declawed;
    }

    setName(name) {
        this.name = name;
    }

    setEyeColor(eyeColor) {
        this.eyeColor = eyeColor;
    }

    setGender(gender) {
        this.gender = gender;
    }
}


class Fur {
    constructor(color, length) {
        this.color = color;
        this.length = length;
    }

    getColor() {
        return this.color
    }

    getLength() {
        return this.length
    }

    setColor(color) {
        this.color = color;
    }

    setLength(length) {
        this.length = length;
    }

    explainFur() {
        return `This animal has a fur color of ${this.color} and it's fur length is ${this.length}`;
    }

}


module.exports = {Cat, Fur}