const inputWgth = document.getElementById('wgth-slider');
const inputSlant = document.getElementById('slant-slider');
const title = document.querySelector('h1');
// variables de estado globales
let opacity = 1; // variable de estado para la opacidad
let elsh = 0; // variable de estado para el elsh
function updateFontStyles() {
    const wgth = inputWgth.value;
    const slant = inputSlant.value;
    title.style.fontWeight = wgth;
    title.style.fontVariationSettings = "'slnt' " +slant + ", 'ELSH' " +elsh;
    title.style.opacity = opacity;
}
inputWgth.addEventListener('input', updateFontStyles);
inputSlant.addEventListener('input', updateFontStyles);
window.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    opacity = 1 - (mouseX / window.innerWidth);
    elsh = (mouseY / window.innerHeight) * 100;
    updateFontStyles();
});