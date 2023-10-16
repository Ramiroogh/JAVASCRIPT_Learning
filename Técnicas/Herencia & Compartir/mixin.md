En JavaScript, los mixins son una técnica de programación que se utiliza para compartir funcionalidad entre objetos o clases sin necesidad de herencia jerárquica. Los mixins permiten agregar propiedades y métodos de un objeto a otro objeto o clase de manera flexible, sin necesidad de crear una relación de herencia estricta. Esto es especialmente útil cuando se quiere reutilizar código en múltiples lugares sin crear una cadena compleja de herencia o cuando se trabaja con clases que no se pueden modificar directamente.

Un mixin es simplemente un objeto que contiene una colección de propiedades y métodos que se pueden agregar a otro objeto o clase. Esto se puede hacer de varias maneras en JavaScript:

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
``` javascript
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```
The flyMixin takes any object and gives it the fly method.
``` javascript
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```
Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:
``` javascript
bird.fly();
plane.fly();
```