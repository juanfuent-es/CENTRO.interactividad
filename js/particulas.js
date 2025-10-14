import Particula from './particula.js';

let particulas = [];
window.setup = function() {
    createCanvas(windowWidth, windowHeight);
    noFill();
}

window.draw = function() {
    background(0, 175);
    for (let particula of particulas) {
        if (particula.isDead()) {
            const index = particulas.indexOf(particula);
            particulas.splice(index, 1); // Eliminamos la partícula del array
        }
        particula.update();
        particula.draw();
    }
}

window.mouseDragged = function() {
    const p = new Particula({
        pos: createVector(mouseX, mouseY),
        life: random(50, 100)
    });
    particulas.push(p); // Agregamos la partícula al array
}

window.windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
}