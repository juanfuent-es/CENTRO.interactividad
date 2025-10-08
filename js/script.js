import Cursor from './cursor.js';

const CURSOR_COUNT = 5;
let cursors = [];

window.setup = function() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < CURSOR_COUNT; i++) {
		let cursor = new Cursor({
			radius: Math.random() * 50 + 10,
			friction: Math.random() * 0.05 + 0.01,
		});
        cursor.setup();
        cursors.push(cursor);
	}
};

window.windowResized = function() {
	resizeCanvas(windowWidth, windowHeight);
};

window.draw = function() {
	background(0);
    noFill();
	for (let cursor of cursors) {
		cursor.update();
		cursor.draw();
	}
};