const button = document.getElementById('enter-btn');
const videoBg = document.getElementById('video-bg');
const container = document.getElementById('attract');

button.addEventListener('click', () => {
    videoBg.play();
});

button.addEventListener('mouseover', function() {
    container.classList.add('over');
    videoBg.play();
});

button.addEventListener('mouseout', function() {
    container.classList.remove('over');
    videoBg.pause();
});