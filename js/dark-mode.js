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

function toggleTheme() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        // toggleThemeBtn.textContent = 'Activar Light Mode';
    } else {
        toggleThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        // toggleThemeBtn.textContent = 'Activar Dark Mode';
    }
}

toggleThemeBtn.addEventListener('click', function() {
    toggleTheme();
});

colorPicker.addEventListener('change', function() {
    document.body.style.color = colorPicker.value;
});