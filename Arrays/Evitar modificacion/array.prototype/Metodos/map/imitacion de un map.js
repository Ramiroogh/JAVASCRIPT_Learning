// Esta version representa el metodo map(), sin necesidad de usar
// el metodo mismo map().

Array.prototype.myMap = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i)) { // Check if the property is not inherited
        newArray.push(callback(this[i], i, this)); // Pass element, index, and the original array to the callback
      }
    }

    return newArray;
};

// Puedes utilizar este método myMap igual que el método map incorporado:

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.myMap(function(num) {
  return num * 2;
});

const doubledNumbersArrowFunction = numbers.myMap(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
