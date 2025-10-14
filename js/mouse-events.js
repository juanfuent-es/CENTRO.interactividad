let radius = 50;
let alpha = 125;
function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    ellipse(mouseX, mouseY, radius, radius);
}

function mousePressed() {
    stroke(255, alpha);
    fill(0, alpha);
    radius = 100;
}

function mouseReleased() {
    stroke(0, alpha);
    fill(255, alpha);
    radius = 50;
}

function mouseMoved() {
    console.log(mouseX, mouseY);
}

function mouseDragged() {
    alpha -= .1;
    if (alpha < 0) {
        alpha = .1;
    }
}