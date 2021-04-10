const {CatDao} = require("./catDao");
const {CatView} = require("./views/catView");
const {CatController} = require("./controller");
const {FurView} = require('./views/furView');

const dao = new CatDao();
const view = new CatView();
const furView = new FurView();


const catController = new CatController(dao, view, furView);


catController.start().then(() => process.exit(0));

