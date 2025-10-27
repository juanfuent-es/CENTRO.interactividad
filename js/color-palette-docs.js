/**
 * DOCUMENTACIÓN DEL GENERADOR DE PALETAS DE COLOR
 * 
 * Este archivo contiene la documentación técnica del sistema de generación
 * automática de paletas de color implementado en el proyecto.
 * 
 * @author: CENTRO - Interactividad Web
 * @version: 1.0
 * @date: 2025
 */

/**
 * FUNCIONES PRINCIPALES
 * 
 * 1. generateColorPalette(baseColor)
 *    - Recibe un color base en formato HEX
 *    - Utiliza Chroma.js para generar variaciones
 *    - Retorna objeto con colores dark, base y light
 * 
 * 2. updateColorPalette(colors)
 *    - Actualiza la interfaz visual con los nuevos colores
 *    - Modifica las variables CSS del documento
 *    - Actualiza el código CSS mostrado al usuario
 * 
 * 3. copyToClipboard(text)
 *    - Copia valores de color al portapapeles
 *    - Incluye feedback visual para el usuario
 * 
 * TECNOLOGÍAS UTILIZADAS:
 * 
 * - Chroma.js: Librería para manipulación de colores
 *   - Método darken(): Oscurece un color
 *   - Método brighten(): Aclara un color
 *   - Método hex(): Convierte a formato hexadecimal
 * 
 * - CSS Custom Properties (Variables CSS):
 *   - --dark: Color oscuro generado
 *   - --light: Color claro generado
 *   - --base: Color base seleccionado
 * 
 * - HTML5 Color Input:
 *   - <input type="color"> para selección de colores
 *   - Evento 'input' para cambios en tiempo real
 * 
 * EJEMPLO DE USO:
 * 
 * ```javascript
 * // Generar paleta desde un color base
 * const palette = generateColorPalette('#3498db');
 * console.log(palette);
 * // Output: { dark: '#2980b9', base: '#3498db', light: '#5dade2' }
 * 
 * // Actualizar interfaz
 * updateColorPalette(palette);
 * ```
 * 
 * INTEGRACIÓN CON CSS:
 * 
 * Las variables CSS se actualizan dinámicamente:
 * ```css
 * :root {
 *   --dark: #2980b9;
 *   --light: #5dade2;
 *   --base: #3498db;
 * }
 * ```
 * 
 * Esto permite que todos los elementos que usen estas variables
 * cambien automáticamente cuando se selecciona un nuevo color.
 */
