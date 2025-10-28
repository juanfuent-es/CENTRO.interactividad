function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // background(120, 10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    const red = Math.abs(Math.sin(frameCount * .01)) * 255;
    const green = Math.abs(Math.sin(frameCount * .01 + 2)) * 255;
    const blue = Math.abs(Math.sin(frameCount * .01 + 4)) * 255;
    fill(red, green, blue);
    stroke(0);
    const size = Math.abs(Math.sin(frameCount * .01)) * 100;
    ellipse(mouseX, mouseY, size, size);
    // rect(mouseX, mouseY, size, size);
}