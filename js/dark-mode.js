// Selección de elementos del DOM
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Añadir el listener al botón
themeToggleButton.addEventListener('click', () => {
    // La función que se ejecuta en cada click
    body.classList.toggle('dark');
    // Actualizar el texto del botón para mejorar la experiencia de usuario
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        themeToggleButton.textContent = 'Light Mode';
    } else {
        body.classList.add('dark');
        themeToggleButton.textContent = 'Dark Mode';
    }
});