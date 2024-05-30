const analyzer = {
  getWordCount: (text) => { //primero defino qué es una palabra
    const words = text.trim().split(/\s+/). filter(word => word !== '' && !/^\d+$/.test(word)); //exp regular para whitespace character(uno o varios)
   
    return words.length; 
  },



  getCharacterCount: (text) => {
    return text.length;
  },


  getCharacterCountExcludingSpaces: (text) => {
    //Uso exp regular para excluir mis non-word characters
    return text.replace(/\W|_/g, '').length;
  },


  getAverageWordLength: (text) => { 
    const words = text.trim().split(/\s+/). filter(word => word !== '' && !/^\d+$/.test(word)); 
    let totalLength = 0; //inicio variable para almacenar suma length
    
    // Primero calculo con bucle la longitud total
    for (let i = 0; i < words.length; i++) {
      //uso el acumulador += para ir almacenando la longitud en mi variable totalLength
      totalLength += words[i].length;
    }
  
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
      
    const numbers = text.match(/\d+/g) || []; //asigno array vacío si no encuentro num
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) { // bucle for para sumar todos los números
      sum += Number(numbers[i]);
      
    }
    
    return sum;
  },

}
  
  
  
export default analyzer;
  
  