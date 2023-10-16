# Splice & Slice
### En la Mutacion de un array
uso de splice en lugar de slice, Aquí está la explicación de por qué esto es así:

+ splice modifica el array original al eliminar elementos a partir del índice especificado y, por lo tanto, afecta el array en su lugar. Esto causa un comportamiento inesperado cuando se llama a splice dos veces para dividir el array en dos partes.
``` javascript
const arr = [1, 2, 3, 4, 5];

// Eliminar dos elementos desde el índice 2 y reemplazarlos con 'a' y 'b'
const removedElements = arr.splice(2, 2, 'a', 'b');

console.log(arr); // Output: [1, 2, 'a', 'b', 5]
console.log(removedElements); // Output: [3, 4]
```
En este ejemplo, splice modificó el array original arr al eliminar dos elementos a partir del índice 2 y reemplazarlos con 'a' y 'b'. Además, devuelve los elementos eliminados en un nuevo array.

---
+ slice, por otro lado, devuelve una nueva copia del array que contiene los elementos seleccionados sin modificar el array original. Por lo tanto, es la opción correcta cuando deseas dividir un array en dos partes sin alterar el original.
``` javascript
const arr = [1, 2, 3, 4, 5];

// Crear una nueva copia del array desde el índice 1 hasta el índice 3
const slicedArr = arr.slice(1, 4);

console.log(arr); // Output: [1, 2, 3, 4, 5]
console.log(slicedArr); // Output: [2, 3, 4]
```
En este ejemplo, slice no modifica el array original arr, sino que crea una nueva copia de una porción del array, desde el índice 1 (inclusive) hasta el índice 4 (no inclusivo). El resultado se almacena en slicedArr.

---
Entonces, al reemplazar splice por slice, se asegura que se obtenga el resultado esperado, ya que se divide el array en dos partes sin modificar el array original, y luego se concatenan esas partes para obtener la lista de pestañas final deseada.