// Esto se vuelve tedioso después de más de unas pocas propiedades.

Bird.prototype.numLegs = 2;

Bird.prototype.eat = function() {
    console.log("nom nom nom");
}
  
  Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
}

// Una forma más eficaz es establecer el prototipo en un nuevo objeto que ya
// contenga las propiedades. De esta forma, las propiedades se añaden todas a la vez:

Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};