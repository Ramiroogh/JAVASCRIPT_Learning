### Metodo Splice()
+ Modifica el Array Original
+ Puede agregar nuevos elementos al Array Original

El método `splice` es otra función incorporada en JavaScript que se introdujo en ECMAScript 3 (ES3). A diferencia de `slice`, `splice` no solo permite extraer elementos de un array sino que también puede **insertar nuevos elementos en su lugar**. Además, tiene la capacidad de **eliminar elementos del array original**. Este método ofrece una forma poderosa de manipular arrays en su lugar.

### Ejemplo: Eliminar elementos y Agregar nuevos en su lugar
```javascript
// Definir un array
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// Utilizar el método splice para eliminar elementos y añadir nuevos
const removedFruits = fruits.splice(1, 2, 'Peach', 'Cherry');

console.log(removedFruits); // Output: ['Banana', 'Orange'] (elementos eliminados)
console.log(fruits); // Output: ['Apple', 'Peach', 'Cherry', 'Mango', 'Grapes'] (array modificado)
```

En este ejemplo, `splice` se utiliza para eliminar dos elementos desde la posición 1 y luego insertar 'Peach' y 'Cherry' en esa misma posición, modificando así el array original.

### Ejemplo: Eliminar solo elementos especificos.
El método `splice` se puede utilizar solo para eliminar elementos sin necesidad de añadir nuevos elementos. Al llamar a `splice` solo con el **argumento de inicio y el número de elementos a eliminar**, puedes eliminar elementos del array original sin insertar nuevos elementos en su lugar.

Aquí hay un ejemplo:

```javascript
// Definir un array
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// Utilizar el método splice para eliminar elementos sin añadir nuevos
const removedFruits = fruits.splice(1, 2);

console.log(removedFruits); // Output: ['Banana', 'Orange'] (elementos eliminados)
console.log(fruits); // Output: ['Apple', 'Mango', 'Grapes'] (array modificado)
```

En este ejemplo, `splice(1, 2)` elimina dos elementos del array `fruits` comenzando desde el índice 1. La variable `removedFruits` contiene los elementos eliminados ('Banana' y 'Orange'), y el array `fruits` se modifica para reflejar los cambios.

+ Recuerda que `splice` modifica el array original y también puede insertar nuevos elementos si proporcionas argumentos adicionales después del número de elementos a eliminar. Si solo quieres eliminar elementos, simplemente omite los argumentos adicionales después del número de elementos a eliminar.

### Implementación Bajo el Capó:
Bajo el capó, la implementación de `splice` es más compleja que `slice`. Este método necesita manejar la eliminación y la inserción de elementos, ajustando adecuadamente la longitud del array. Aquí hay una versión simplificada de cómo podrías construir `splice` bajo el capó:

```javascript
Array.prototype.mySplice = function(startIndex, deleteCount, ...newElements) {
  const newArray = [...this];
  const length = this.length;

  // Manejar índice de inicio
  const start = startIndex >= 0 ? startIndex : Math.max(0, length + startIndex);

  // Manejar recuento de elementos a eliminar
  const count = Math.min(deleteCount, length - start);

  // Eliminar elementos del array original
  const removedElements = newArray.splice(start, count, ...newElements);

  return removedElements;
};
```

Esta implementación simplificada de `mySplice` intenta replicar la funcionalidad básica de `splice`. En un entorno de navegador, la implementación real sería más compleja para manejar casos edge, revertir operaciones, y garantizar la eficiencia.