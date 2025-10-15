// 1. Selección de elementos del DOM
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');
// document.body.classList.remove('dark');
/*
    Eventos sobre botones
    'click' -> se ejecuta cuando se hace click en un elemento
    'mouseover' -> se ejecuta cuando el mouse pasa sobre un elemento
    'mouseout' -> se ejecuta cuando el mouse sale de un elemento
*/

/* function nombreFuncion() {
    // accion
} */

// Función de toggle de tema
function toggleTheme() {
    // Alterna la clase 'dark' en el elemento body
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        // toggleThemeBtn.textContent = 'Light Mode';
    } else {
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        // toggleThemeBtn.textContent = 'Dark Mode';
    }
}

// Añadir un Event Listener para el evento 'click'
toggleThemeBtn.addEventListener('click', toggleTheme);

if (colorPicker) {
    colorPicker.addEventListener('change', function() {
        document.body.style.color = colorPicker.value;
    });
}