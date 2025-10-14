export default class Cursor {
    constructor(options={}) {
        this.radius = options.radius || 50;
        this.friction = options.friction || 0.1;
        this.pos = null;
        this.setup();
    }

    setup() {
        this.pos = createVector(mouseX, mouseY);
    }

    update() {
        this.pos.lerp(createVector(mouseX, mouseY), this.friction);
        // this.pos = createVector(mouseX, mouseY);
    }

    draw() {
        stroke(255);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}