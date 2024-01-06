# Estructura del metodo Filter
El método `filter` es parte del estándar ECMAScript y está disponible en JavaScript desde la versión ECMAScript 5 (ES5), que fue lanzada en diciembre de 2009. No es una característica nueva y ha sido ampliamente adoptada en todos los navegadores modernos.

La introducción del método `filter` en JavaScript fue parte de los esfuerzos para mejorar y estandarizar el lenguaje a través de las sucesivas versiones de ECMAScript. ECMAScript 5 (ES5) trajo consigo muchas mejoras al lenguaje, proporcionando nuevas funciones y métodos para trabajar con arrays de manera más eficiente y expresiva.


``` javascript
// Definir un array de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utilizar el método filter para obtener solo los números pares
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```

El método `filter` permite a los desarrolladores filtrar elementos de un array basándose en una función de retorno de llamada que determina si un elemento debe incluirse en el nuevo array resultante. Esto proporciona una forma concisa y funcional de manipular colecciones de datos en JavaScript.

Es importante destacar que el método `filter` es solo una de las muchas funciones y características introducidas en ECMAScript para mejorar la manipulación de arrays y la programación funcional en JavaScript.


---
### Metodo Filter() detras de escenas
Ya sabemos que el metodo filter, esta incluido en todos los prototipos de javascript, pero vamos a ver en profundidad como es que este metodo funciona.

``` javascript 
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];

// Using myFilter to filter even numbers
const filteredNumbers = numbers.myFilter(num => num % 2 === 0);

console.log(filteredNumbers);  // Output: [2, 4]

```

bajo el capó, el método `filter` en JavaScript está implementado utilizando un bucle for, similar a lo que se mostró en el ejemplo de `myFilter`. El código interno del método `filter` recorre cada elemento del array y ejecuta la función de retorno de llamada proporcionada.

La implementación exacta puede variar entre los motores de JavaScript (como V8 en Chrome, SpiderMonkey en Firefox, etc.), pero el concepto general es similar. La idea central es iterar sobre los elementos del array, aplicar la función de retorno de llamada a cada elemento y, si la función devuelve `true`, agregar ese elemento al nuevo array resultante. Este proceso crea un nuevo array que contiene solo los elementos que cumplen con la condición especificada en la función de retorno de llamada.