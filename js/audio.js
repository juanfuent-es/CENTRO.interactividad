let song, fft, amp;
const bins = 16;
const smoothing = 0.915;

// Usamos una variable global para el contenedor de instrucciones para simplificar su acceso
const toggleSoundBtn = document.getElementById('toggle-sound-btn');

/* Música de biblioteca de youtube https://www.youtube.com/audiolibrary/music */
function preload() {
    // URL de la canción
    song = loadSound("../audio/maquina-tortillas.mp3");
}

function setup() {
    // Aseguramos que el canvas se crea y se adjunta el evento de clic
    createCanvas(windowWidth, windowHeight);
    toggleSoundBtn.addEventListener('click', toggleSound);

    // Inicialización de p5.sound
    amp = new p5.Amplitude();
    fft = new p5.FFT(smoothing, bins);
    fft.setInput(song);

    noFill();

    // Obtener la referencia al elemento de instrucciones
    background(color("#212121"));
    windowResized();
}

function windowResized() {
    // FIX: Asegurar que el canvas y el contexto de p5.js están inicializados (width y height tienen valores)
    // antes de llamar a las funciones de p5.js como resizeCanvas y background.
    resizeCanvas(windowWidth, windowHeight);
}

function toggleSound() {
    // Esta función inicia el contexto de audio y reproduce/detiene la música
    if (getAudioContext().state !== 'running') {
        userStartAudio(); // Asegura el inicio del contexto de audio
    }
    if (song.isPlaying()) {
        toggleSoundBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        song.pause();
    } else {
        toggleSoundBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        song.play();
    }
}

function draw() {
    // Dibujar un fondo con muy baja opacidad para crear un efecto de rastro/trail
    background(color("#212121"));

    if (!song.isPlaying()) {
        return; // No dibujar la visualización si la música está pausada
    }

    const spectrum = fft.analyze();

    stroke(color("#EC407A"));
    // Replicación de la lógica de dibujo original
    beginShape();

    // Usar la energía del rango medio para determinar el grosor del trazo
    const level = fft.getEnergy("mid");
    strokeWeight(2);

    const invertedSpectrum = spectrum.slice().reverse();
    const values = invertedSpectrum.concat(spectrum); // Espectro reflejado para un trazo simétrico

    // Añadir un punto inicial para asegurar la curva en el borde izquierdo
    curveVertex(0, height / 2);

    for (let i = 0; i < values.length; i++) {
        const x = map(i, 0, values.length, 0, width);
        let yOffset = map(values[i], 0, 255, 0, height / 4);

        // Alternar la dirección del desplazamiento Y para el efecto "onda"
        if (i % 2 == 0) yOffset *= -1;

        // El punto Y se centra alrededor de la mitad de la altura
        curveVertex(x, yOffset + height / 2);
    }

    // Añadir un punto final para asegurar la curva en el borde derecho
    curveVertex(width, height / 2);

    endShape();
}