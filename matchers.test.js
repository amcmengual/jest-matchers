const {
    isPositive,
    sum,
    containsSubstring,
    addItemToArray,
    getArrayLength,
  } = require('./matchers');
  
  describe('Testes utilizando diferentes matchers do Jest', () => {
   
    test('isPositive deve retornar true para números positivos', () => {
      expect(isPositive(10)).toBeTruthy(); 
    });
  
    test('sum deve calcular a soma corretamente', () => {
      expect(sum(3, 5)).toBe(8); 
    });
  
  
    test('containsSubstring deve confirmar se a substring está presente', () => {
      expect(containsSubstring('Hello World', 'World')).toBe(true); 
    });
  
    test('containsSubstring deve falhar se a substring não estiver presente', () => {
      expect(containsSubstring('Hello World', 'JavaScript')).toBe(false);
    });
  
    test('addItemToArray deve adicionar um item ao array corretamente', () => {
      const array = [1, 2, 3];
      const newArray = addItemToArray(array, 4);
      expect(newArray).toContain(4); 
    });
  
    test('getArrayLength deve retornar o tamanho correto do array', () => {
      const array = ['a', 'b', 'c'];
      expect(getArrayLength(array)).toBeGreaterThan(2); 
    });
  });
  