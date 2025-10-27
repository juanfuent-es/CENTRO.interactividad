# 📚 Librerías CDN Utilizadas en el Proyecto

Este documento lista todas las librerías externas que se cargan desde CDN en el proyecto CENTRO.interactividad.

## 🌐 CDN Utilizado
- **Cloudflare CDN**: `https://cdnjs.cloudflare.com/ajax/libs/`

## 📦 Librerías Incluidas

### 1. **Font Awesome** (Iconos)
- **Versión**: 6.4.0
- **URL**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- **Uso**: Iconos para botones y elementos de interfaz
- **Archivos que la usan**:
  - `index.html`
  - `dark.html`
  - `dark-mode.html`
  - `color-demo.html`

### 2. **Chroma.js** (Manipulación de Colores)
- **Versión**: 2.4.2
- **URL**: `https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.4.2/chroma.min.js`
- **Uso**: Generación automática de paletas de color, conversiones de color
- **Archivos que la usan**:
  - `index.html`
  - `dark.html`
  - `dark-mode.html`
  - `color-demo.html`

### 3. **p5.js** (Biblioteca de Gráficos)
- **Versión**: 2.0.5
- **URL**: `https://cdnjs.cloudflare.com/ajax/libs/p5.js/2.0.5/p5.min.js`
- **Uso**: Animaciones, gráficos y visualizaciones interactivas
- **Archivos que la usan**:
  - `mouse.html`
  - `cursor.html`
  - `particulas.html`

## 🎯 Funcionalidades Habilitadas

### Con Font Awesome:
- Iconos de sol/luna para toggle de temas
- Iconos de paleta de colores
- Iconos decorativos en la interfaz

### Con Chroma.js:
- Generación automática de variaciones de color (claro/oscuro)
- Conversión entre formatos de color (HEX, RGB, HSL)
- Manipulación avanzada de colores
- Algoritmos de luminosidad y saturación

### Con p5.js:
- Eventos de mouse interactivos
- Animaciones de partículas
- Gráficos vectoriales dinámicos
- Canvas HTML5 programático

## 📁 Estructura de Archivos

```
CENTRO.interactividad/
├── index.html          # ✅ Font Awesome + Chroma.js
├── dark.html           # ✅ Font Awesome + Chroma.js
├── dark-mode.html      # ✅ Font Awesome + Chroma.js
├── color-demo.html     # ✅ Font Awesome + Chroma.js
├── mouse.html          # ✅ p5.js
├── cursor.html         # ✅ p5.js
└── particulas.html     # ✅ p5.js
```

## 🔧 Instalación y Configuración

### Para usar en nuevos archivos HTML:

```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Chroma.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.4.2/chroma.min.js"></script>

<!-- p5.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/2.0.5/p5.min.js"></script>
```

## 📊 Beneficios de usar CDN

1. **Rendimiento**: Los archivos se sirven desde servidores optimizados
2. **Caché**: Los usuarios pueden tener las librerías ya cacheadas
3. **Confiabilidad**: Cloudflare tiene alta disponibilidad
4. **Actualizaciones**: Fácil actualización de versiones
5. **Ancho de banda**: Reduce el tráfico del servidor propio

## 🚀 Funcionalidades del Proyecto

### Generador de Paletas de Color
- Input color picker HTML5
- Cálculo automático de variaciones
- Variables CSS dinámicas
- Interfaz visual interactiva

### Sistema de Temas
- Toggle entre modo claro y oscuro
- Persistencia de preferencias
- Transiciones suaves
- Iconos dinámicos

### Visualizaciones Interactivas
- Partículas animadas
- Seguimiento de cursor
- Eventos de mouse
- Gráficos en tiempo real

---

*Documentación generada automáticamente - CENTRO.interactividad 2025*
