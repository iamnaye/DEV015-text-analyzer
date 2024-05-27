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
      
    },

    getNumberCount: (text) => {
        // primero defino qué es un número

        const numbers = text.match(/\d+/g) || [];
        return numbers.length;
    },
    
    getNumberSum: (text) => {
      // Implementación pendiente
    },
  };
  
  
  export default analyzer;
  
  