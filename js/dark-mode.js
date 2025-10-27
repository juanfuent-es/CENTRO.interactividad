// 1. Selección de elementos del DOM
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const colorPicker = document.getElementById('color-picker');

// Elementos del generador de paletas
const darkColorBox = document.getElementById('dark-color');
const baseColorBox = document.getElementById('base-color');
const lightColorBox = document.getElementById('light-color');
const darkValue = document.getElementById('dark-value');
const baseValue = document.getElementById('base-value');
const lightValue = document.getElementById('light-value');
const cssVariables = document.getElementById('css-variables');

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

// Función para generar paleta de colores usando Chroma.js
function generateColorPalette(baseColor) {
    try {
        // Crear objeto de color usando Chroma.js
        const color = chroma(baseColor);
        
        // Generar variaciones del color
        const darkColor = color.darken(0.4).hex(); // 40% más oscuro
        const lightColor = color.brighten(0.3).hex(); // 30% más claro
        
        return {
            dark: darkColor,
            base: baseColor,
            light: lightColor
        };
    } catch (error) {
        console.error('Error generando paleta de colores:', error);
        return {
            dark: '#2980b9',
            base: baseColor,
            light: '#5dade2'
        };
    }
}

// Función para actualizar la interfaz con los nuevos colores
function updateColorPalette(colors) {
    // Actualizar las cajas de color
    if (darkColorBox) darkColorBox.style.backgroundColor = colors.dark;
    if (baseColorBox) baseColorBox.style.backgroundColor = colors.base;
    if (lightColorBox) lightColorBox.style.backgroundColor = colors.light;
    
    // Actualizar los valores de texto
    if (darkValue) darkValue.textContent = colors.dark;
    if (baseValue) baseValue.textContent = colors.base;
    if (lightValue) lightValue.textContent = colors.light;
    
    // Actualizar las variables CSS
    if (cssVariables) {
        cssVariables.textContent = `:root {
  --dark: ${colors.dark};
  --light: ${colors.light};
  --base: ${colors.base};
}`;
    }
    
    // Actualizar las variables CSS reales del documento
    document.documentElement.style.setProperty('--dark', colors.dark);
    document.documentElement.style.setProperty('--light', colors.light);
    document.documentElement.style.setProperty('--base', colors.base);
}

// Función para copiar color al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar feedback visual
        const originalText = event.target.textContent;
        event.target.textContent = '¡Copiado!';
        event.target.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
        
        setTimeout(() => {
            event.target.textContent = originalText;
            event.target.style.backgroundColor = '';
        }, 1000);
    }).catch(err => {
        console.error('Error copiando al portapapeles:', err);
    });
}

// Añadir un Event Listener para el evento 'click'
if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', toggleTheme);
}

// Event listener para el color picker
if (colorPicker) {
    colorPicker.addEventListener('input', function() {
        const selectedColor = colorPicker.value;
        const palette = generateColorPalette(selectedColor);
        updateColorPalette(palette);
    });
}

// Event listeners para copiar valores de color
const colorValues = document.querySelectorAll('.color-value');
colorValues.forEach(element => {
    element.addEventListener('click', function() {
        copyToClipboard(this.textContent);
    });
});