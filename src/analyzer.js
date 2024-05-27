const analyzer = {
    getWordCount: (text) => {

        //primero defino qué es una palabra
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
        return totalLength / words.length;
    } else {
        return 0;
    }
  },

  

    getNumberCount: (text) => {
        // primero defino qué es un número

        const numbers = text.match(/\d+/g) || [];
        return numbers.length;
    },
    
    getNumberSum: (text) => {
      
      const numbers = text.match(/\d+/g) || [];
    const sum = numbers.reduce((acc, num) => acc + parseInt(num, 10), 0);
    return sum;;
    },
    }
  
  
  
  export default analyzer;
  
  