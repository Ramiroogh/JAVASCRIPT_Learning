# Método `slice` en JavaScript.

### Descripción y Razón de Implementación:
El método `slice` es una función incorporada en JavaScript que se introdujo en ECMAScript 3 (ES3). Su objetivo principal es extraer una porción de un array existente sin modificar el array original. Este método proporciona una manera flexible de trabajar con subconjuntos de datos en arrays.

+ No modifica el Array original

### Ejemplo Sencillo:
```javascript
// Definir un array
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// Utilizar el método slice para obtener una porción del array
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // Output: ['Banana', 'Orange', 'Mango']
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'] (el array original no se modifica)
```

En este ejemplo, `slice` se utiliza para extraer elementos desde la posición 1 hasta la posición 4 (sin incluirlo), creando así un nuevo array llamado `slicedFruits`.

## Ejemplo: Creando funcion automatizada con Slice
en este ejemplo, no vamos a crear toda la logica del slice, usaremos el metodo tal cual nos brinda javascript, solo que vamos a usarlo implicitamente en una *Funcion Personalizada*, de esta forma:

``` javascript
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  const newArray = anim.slice(beginSlice, endSlice);
  return newArray

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

### Slice, Bajo el Capó:
Bajo el capó, la implementación de `slice` generalmente se realiza utilizando un bucle for para copiar los elementos desde el índice de inicio hasta el índice final (sin incluirlo) en un nuevo array. La lógica detrás de `slice` es gestionar los índices de manera adecuada y devolver un nuevo array con los elementos deseados.

A continuación, se proporciona una versión simplificada y conceptual de cómo podría construirse `slice` bajo el capó:
```javascript
Array.prototype.mySlice = function(startIndex, endIndex) {
  const newArray = [];
  const length = this.length;

  // Manejar índice de inicio
  const start = startIndex >= 0 ? startIndex : Math.max(0, length + startIndex);

  // Manejar índice de final
  const end = endIndex !== undefined ? endIndex : length;

  // Copiar elementos al nuevo array
  for (let i = start; i < end && i < length; i++) {
    newArray.push(this[i]);
  }

  return newArray;
};
```

Esta implementación simplificada demuestra cómo podrías construir un método `mySlice` que comparte la funcionalidad básica de `slice`. La versión real en un entorno de navegador sería más robusta y eficiente.