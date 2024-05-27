import analyzer from './analyzer.js';


// Seleccionar los elementos del DOM
const textareaElement = document.querySelector('textarea[name="user-input"]');
const wordCountElement = document.querySelector('.word-count');
const charCountElement = document.querySelector('.char-count');
const charCountExcludingSpacesElement = document.querySelector('.char-count-excluding-spaces');
const numberCountElement = document.querySelector('.num-count');


// Debug para verificar selección
console.log("Textarea Element:", textareaElement);
console.log("Word Count Element:", wordCountElement);
console.log("Char Count Element:", charCountElement);
console.log("Char Count Excluding Spaces Element:", charCountExcludingSpacesElement);


// Función para actualizar el conteo de palabras en la UI
function updateWordCount() {
  const text = textareaElement.value;
  const wordCount = analyzer.getWordCount(text);
  console.log("Texto actual (word count):", text); // Debug
  console.log("Recuento de palabras:", wordCount); // Debug
 
    wordCountElement.textContent = wordCount;  
 
}


// Función para actualizar el conteo de caracteres en la UI
function updateCharCount() {
  const text = textareaElement.value;
  const charCount = analyzer.getCharacterCount(text);
  console.log("Texto actual (char count):", text); // Debug  
  console.log("Recuento de caracteres:", charCount); // Debug
 
  charCountElement.textContent = charCount;
 
}


// Función para actualizar el conteo de caracteres excluyendo espacios y signos de puntuación en la UI
function updateCharCountExcludingSpaces() {
  const text = textareaElement.value;
  const charCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  console.log("Texto actual (char count excluding spaces):", text); // Debug
  console.log("Recuento de caracteres excluyendo espacios y signos de puntuación:", charCountExcludingSpaces); // Debug
 
    charCountExcludingSpacesElement.textContent = charCountExcludingSpaces;
 ;
 
}

//Función para contar los números

function updateNumberCount() {

    const text = textareaElement.value;
    const numberCount = analyzer.getNumberCount(text);
    console.log ("Texto actual (conteo numeros):", text); 
    console.log ("Recuento de numeros:", numberCount);
    numberCountElement.textContent = numberCount;
}


// Añadir el event listener al textarea para actualizar el conteo en tiempo real
textareaElement.addEventListener('input', () => {
  updateWordCount();
  updateCharCount();
  updateCharCountExcludingSpaces();
  updateNumberCount();
});


// Llamar a las funciones de actualización una vez al inicio para el caso de que haya texto inicial
updateWordCount();
updateCharCount();
updateCharCountExcludingSpaces();
updateNumberCount();


// Función para borrar el texto ingresado y actualizar el contador
document.getElementById('reset-button').addEventListener('click', function() {
  textareaElement.value = '';
  updateWordCount(); // Asegurarse de actualizar el conteo después de borrar
  updateCharCount(); // Asegurarse de actualizar el conteo después de borrar
  updateCharCountExcludingSpaces();
  updateNumberCount();
});
