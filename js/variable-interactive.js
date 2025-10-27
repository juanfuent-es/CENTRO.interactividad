const wgthSlider = document.getElementById('wgth-slider');
const title = document.querySelector('h1');

wgthSlider.addEventListener('input', function() {
    const wght = wgthSlider.value;
    title.style.fontWeight = wght;
});

window.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const wdth = 75 + (mouseX / window.innerWidth) * 25;
    title.style.fontVariationSettings = "'wdth' " + wdth;
    const opacity = 1 - (mouseX / window.innerWidth);
    title.style.opacity = opacity; 
});