// Selección de elementos del DOM
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Añadir el listener al botón
themeToggleButton.addEventListener('click', () => {
    // Alternar la clase 'dark' en el body
    body.classList.toggle('dark');
    
    // Actualizar el texto del botón para mejorar la experiencia de usuario
    if (body.classList.contains('dark')) {
        themeToggleButton.textContent = 'Light Mode';
    } else {
        themeToggleButton.textContent = 'Dark Mode';
    }
});