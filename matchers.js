
function isPositive(num) {
    return num > 0;
  }
  
 
  function sum(a, b) {
    return a + b;
  }
  

  function containsSubstring(str, substring) {
    return str.includes(substring);
  }
  
 
  function addItemToArray(array, item) {
    return [...array, item];
  }
  

  function getArrayLength(array) {
    return array.length;
  }
  
  module.exports = {
    isPositive,
    sum,
    containsSubstring,
    addItemToArray,
    getArrayLength,
  };
  