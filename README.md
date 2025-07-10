# Simulación Visual de Pilas Dinámicas en JavaScript (Ejemplo Deshacer/Rehacer)

## Descripción

Este proyecto muestra una implementación sencilla de una **pila dinámica** usando JavaScript, inspirada en la funcionalidad de “deshacer” y “rehacer” que encontramos en editores de texto y otras aplicaciones.  
Aquí cada vez que escribes o guardas un cambio el estado anterior se guarda en una pila, si usas “Deshacer” (Ctrl+Z) el último cambio se retira (pop) y si lo deseas, puedes recuperarlo con “Rehacer” (Ctrl+Y) moviéndolo entre pilas.

Este ejemplo permite visualizar cómo funcionan las **pilas** en programación y cómo se utilizan para implementar flujos tipo “historial”, donde el último cambio realizado es el primero que se puede revertir (**LIFO** – Last In, First Out).

---

## ¿Qué es una pila?

Una **pila** es una estructura de datos dinámica donde los elementos se agregan y se retiran siempre por el mismo extremo, llamado “tope”.  
Cada vez que se realiza un cambio se apila el estado previo y al deshacer se des apila el último guardado, si se rehace, ese estado se mueve de la pila de rehacer a la de deshacer.

---

## Instrucciones para Descargar y Usar

1. **Descarga o clona el proyecto**
   - Descarga el archivo comprimido o clona el repositorio desde GitHub.

2. **Instala dependencias**
   ```bash
   npm install

3. **Inicia el entorno de desarrollo**
    ```bash
    ngpm run dev
