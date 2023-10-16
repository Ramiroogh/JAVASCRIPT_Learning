// Entender de dónde viene el prototipo de un objeto
// Al igual que las personas heredan los genes de sus padres, un objeto hereda su prototipo directamente de la función constructora que lo creó. Por ejemplo, aquí el constructor Pájaro crea el objeto pato:

function Bird(name) {
    this.name = name;
}
  
let duck = new Bird("Donald");

// duck hereda su prototipo de la función constructora Bird. Puedes mostrar esta relación con el método isPrototypeOf:
Bird.prototype.isPrototypeOf(duck);

// TRUE