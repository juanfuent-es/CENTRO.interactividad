function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    noFill();
    stroke(255);
    ellipse(mouseX, mouseY, 100, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    arc(mouseX, mouseY, 100, 100, 0, PI);
}
