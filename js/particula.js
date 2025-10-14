export default class Particula {
    constructor(params={}) {
        // Datos de entrada
        this.pos = params.pos || createVector(windowWidth / 2, windowHeight / 2);
        this.vel = createVector(0, 0);
        this.size = 10;
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
        this.color = color(255);
        this.alpha = 255;
        this.life = params.life || 100;
        this.setup();
    }
    setup() {
        const x = random(-3, 3);
        const y = random(-6, 0);
        this.vel = createVector(x, y);
    }
    // Procesos
    update() {
        this.pos.add(this.vel);
        this.alpha = map(this.life, 100, 0, 255, 0);
        this.size = map(this.life, 100, 0, 50, 0);
        this.color = color(this.red, this.green, this.blue, this.alpha);
        this.life--; // Decremento de vida de 1 unidad
    }
    // Salida
    draw() {
        stroke(this.color);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    // Métodos
    isDead() {
        return this.life <= 0;
    }
}