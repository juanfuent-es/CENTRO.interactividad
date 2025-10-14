import Cursor from './cursor.js';
let cursor = null;

window.setup = function() {
    cursor =new Cursor()
    createCanvas(windowWidth, windowHeight);
}

window.draw = function() {
    background(0, 175);
    cursor.update();
    cursor.draw();
}