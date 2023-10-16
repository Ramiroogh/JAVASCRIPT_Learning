### Utilizar una IIFE para crear un módulo
Una expresión de función inmediatamente invocada (IIFE) se utiliza a menudo para agrupar funcionalidad relacionada en un único objeto o módulo. Por ejemplo, en un reto anterior se definieron **dos mixins**:
``` javascript
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```
Podemos agrupar estos mixins en un módulo de la siguiente manera:
``` javascript
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```
Observe que tiene una expresión de función inmediatamente invocada (IIFE) que devuelve un objeto *motionModule*. Este objeto devuelto contiene todos los comportamientos mixin como propiedades del objeto.
+ La ventaja del patrón módulo es que todos los comportamientos de movimiento se pueden empaquetar en un solo objeto que luego puede ser utilizado por otras partes de su código. He aquí un ejemplo:
``` javascript
motionModule.glideMixin(duck);
duck.glide();
```