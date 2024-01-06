# Metodo Reduce
Utilizar el método reduce para analizar datos
Array.prototype.reduce(), o simplemente reduce(), es la más general de todas las operaciones con matrices en JavaScript. Puedes resolver casi cualquier problema de procesamiento de matrices utilizando el método reduce.

El método reduce permite formas más generales de procesamiento de matrices, y es posible demostrar que tanto filter como map pueden derivarse como aplicaciones especiales de reduce. El método reduce itera sobre cada elemento de un array y devuelve un único valor (cadena, número, objeto, array). Esto se consigue mediante una función de llamada de retorno que se llama en cada iteración.

## Estructura

Esta función acepta cuatro argumentos. El primer argumento es el acumulador, al que se asigna el valor de retorno de la función callback de la iteración anterior, el segundo es el elemento que se está procesando, el tercero es el índice de ese elemento y el cuarto es el array sobre el que se llama a reduce.

+ Además de la función callback, reduce tiene un parámetro adicional que toma un valor inicial para el acumulador. Si no se utiliza este segundo parámetro, la primera iteración se salta y a la segunda iteración se le pasa el primer elemento del array como acumulador.

Véase a continuación un ejemplo en el que se utiliza reducir en la matriz de usuarios para obtener la suma de las edades de todos los usuarios. Para simplificar, el ejemplo sólo utiliza el primer y segundo argumento.

``` javascript
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);
```
La consola mostraría el valor 64.

En otro ejemplo, vea cómo se puede devolver un objeto que contenga los nombres de los usuarios como propiedades con sus edades como valores.

``` javascript
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);
```
La consola mostraría el valor { John: 34, Amy: 20, camperCat: 10 }.