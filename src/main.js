// Pila de deshacer (undo) y rehacer (redo)
let undoStack = []; // Guarda los estados previos del texto
let redoStack = []; // Guarda los estados "deshechos" para rehacer
let texto = "";    // Estado actual del texto
// Actualiza la vista: muestra el texto y el contenido de las pilas
function actualizarVista() {
  document.getElementById('input').value = texto;
  document.getElementById('info').innerHTML = 
    `<b>Undo stack:</b> [${undoStack.map(x => `"${x}"`).join(', ')}]<br>
     <b>Redo stack:</b> [${redoStack.map(x => `"${x}"`).join(', ')}]`;
}
// Guarda el nuevo estado del texto y limpia la pila de rehacer
function realizarAccion() {
  let nuevoTexto = document.getElementById('input').value;
  if (nuevoTexto !== texto) { // Solo si el texto cambió
    undoStack.push(texto);    // Guarda el estado anterior
    texto = nuevoTexto;       // Actualiza el estado actual
    redoStack = [];           // Limpia la pila de rehacer
    actualizarVista();        // Actualiza la interfaz
  }
}
// Deshace la última acción realizada
function deshacer() {
  if (undoStack.length > 0) {
    redoStack.push(texto);    // Guarda el estado actual en redo
    texto = undoStack.pop();  // Recupera el último estado guardado
    actualizarVista();
  }
}
// Rehace la última acción deshecha
function rehacer() {
  if (redoStack.length > 0) {
    undoStack.push(texto);    // Guarda el estado actual en undo
    texto = redoStack.pop();  // Recupera el estado "rehabilitado"
    actualizarVista();
  }
}
// Permite usar Ctrl+Z para deshacer y Ctrl+Y para rehacer
document.getElementById('input').addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key.toLowerCase() === 'z') { e.preventDefault(); deshacer(); }
  if (e.ctrlKey && e.key.toLowerCase() === 'y') { e.preventDefault(); rehacer(); }
});
// Inicializa la vista al cargar la página
actualizarVista();
