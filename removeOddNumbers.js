const arrayOfNumbers   = [1,2,3,4,11,23,45,44,54,88,89,99,2232,1111],
      removeOddNumbers = arr => arr.filter(a => !(a % 2));

console.log(removeOddNumbers(arrayOfNumbers).join(','));
