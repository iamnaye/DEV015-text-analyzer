const analyzer = {
  getWordCount: (text) => { //primero defino qué es una palabra
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    return words.length;
  },


  getCharacterCount: (text) => {
    return text.length;
  },


  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[^\w]|_/g, '').length;
  },


  getAverageWordLength: (text) => { 
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    //convierto la lista de valores en un único valor
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    if (words.length > 0) {
      return (totalLength / words.length).toFixed(2);
    } else {
      return '0';
    }
  
  },

  
  getNumberCount: (text) => {
    // primero defino qué es un número

    const numbers = text.match(/\d+/g) || [];
    return numbers.length;
  },
    

  getNumberSum: (text) => {
      
    const numbers = text.match(/\d+/g) || [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) { // bucle for para sumar todos los números
      sum += parseInt(numbers[i], 10);
      
    }
    
    return sum;
  },
}
  
  
  
export default analyzer;
  
  