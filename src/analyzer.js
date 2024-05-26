const analyzer = {
    getWordCount: (text) => {
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
      // Implementación pendiente
    },
    getNumberCount: (text) => {
      // Implementación pendiente
    },
    getNumberSum: (text) => {
      // Implementación pendiente
    },
  };
  
  
  export default analyzer;
  
  