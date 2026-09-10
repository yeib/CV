# 🚀 Yeib - CV Interactivo (Open Source)

Plantilla de Currículum Vitae web moderna, interactiva y de código abierto. Diseñada para desarrolladores y profesionales de la tecnología que buscan una carta de presentación de alto impacto visual y técnico.

## 🛠️ Arquitectura Técnica

El proyecto fue construido con un enfoque de separación de responsabilidades (Data-driven view) manteniendo la máxima simplicidad (cero dependencias de Node.js o procesos de build):

* **HTML5 & CSS3:** Estructura semántica con animaciones CSS personalizadas (efecto nebulosa *Glassmorphism*).
* **Tailwind CSS:** Renderizado vía CDN para diseño responsivo y utilidades atómicas.
* **Alpine.js:** Manejo de estado reactivo y renderizado de plantillas condicionales (`x-data`, `x-for`).
* **Vanilla JavaScript:** Diccionario de datos (`data.js`) que almacena toda la información del currículum, separando por completo el contenido de la vista.

## ✨ Funcionalidades Destacadas

* **Dual Language (Bilingüe en tiempo real):** Cambio instantáneo entre Español e Inglés sin recargar la página, gestionado de forma nativa por Alpine.js leyendo el estado desde `localStorage`.
* **Motor de Renderizado Dinámico:** Para actualizar la experiencia o añadir nuevas habilidades, solo se requiere editar el objeto JSON en `js/data.js`. El DOM se reconstruye automáticamente.
* **Metadatos Optimizados:** Configuración completa de etiquetas Open Graph y Twitter Cards para lograr un *Link Preview* enriquecido al compartir el sitio.

## 📝 Licencia (MIT)

Este proyecto es de **Código Abierto** y se distribuye bajo la [Licencia MIT](https://choosealicense.com/licenses/mit/). 

Eres completamente libre de clonar este repositorio, modificar el archivo `js/data.js` con tu propia información, cambiar los colores en `js/tailwind.config.js` y hostear tu propia versión.

---
*Desarrollado con ❤️ por Francisco Fuentealba (Yeib).*
