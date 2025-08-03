# Proyecto 2do Bimestre aplicando jenkins pipelin sobre App Bola 8 Mágica🎱

Esta aplicación simula una bola 8 mágica que responde a preguntas del usuario de manera aleatoria. Aplica varios principios de **Clean Code en JavaScript** para mejorar la legibilidad, mantenibilidad y estructura del código.

---

## 🧹 Principios de Clean Code aplicados sobre el archivo script.js

### 1. **Nombres Significativos**
- Variables como `bolaMagica`, `imagenBolaParaPregunta`, `tiempoRecargaDeImagen` y `listaDeRespuestas` describen claramente su propósito.
- El nombre de la función `hacerPregunta` indica con claridad qué acción realiza.

### 2. **Funciones con una sola responsabilidad**
- La función `hacerPregunta(pregunta)` se encarga exclusivamente de procesar una pregunta, elegir una respuesta aleatoria y mostrarla.
- La función `onClick()` maneja la lógica de interacción del usuario, ocultando y mostrando elementos según corresponda.

### 3. **Evitar la repetición**
- Las URLs de las imágenes están definidas en variables reutilizables (`imagenBolaParaPregunta` y `imagenBolaParaRespuesta`) para evitar hardcoding repetido.
- De igual forma la variable `tiempoRecargaDeImagen` almacena una cantidad de tiempo para evitar hardcoding repetido.

### 4. **Uso de estructuras de datos simples**
- Se utiliza un array `listaDeRespuestas` para manejar las respuestas posibles de forma limpia y accesible.

### 5. **Uso adecuado de funciones anónimas**
- El `setTimeout` contiene una función anónima para mantener la lógica encapsulada y localizada donde se necesita.

### 6. **Funciones con un solo argumento**
- Las funciones tienen uno o ningun argumeno para su funcionalidad.
---

## ⚙️ Integración Continua con Jenkins

Esta app forma parte de un repositorio que contiene múltiples aplicaciones. Para automatizar la validación y publicación de esta app, se ha implementado una **pipeline declarativa con Jenkins**.

### ¿Qué hace la pipeline?

El archivo `Jenkinsfile` dentro de `AppBola8/` realiza lo siguiente:

1. Entra a la carpeta `AppBola8`.
2. Verifica que existan los archivos esenciales (`index.html`, `style.css`, `script.js`).
3. Simula una validación de sintaxis (puedes integrar `eslint`, `stylelint`, etc.).
4. Publica los archivos en una carpeta `dist/`.

### ¿Cómo usarla?

1. En Jenkins, crea un **Pipeline Job**.
2. En la sección de configuración:
   - **SCM:** Git
   - **Script Path:** `AppBola8/Jenkinsfile`
3. Ejecuta el pipeline para verificar y construir automáticamente esta app.

---

## 🚀 Cómo usar la app

1. Abre el archivo HTML en un navegador.
2. Haz clic en el botón de pregunta.
3. Escribe tu pregunta en el prompt.
4. La bola 8 mágica te dará una respuesta aleatoria.


