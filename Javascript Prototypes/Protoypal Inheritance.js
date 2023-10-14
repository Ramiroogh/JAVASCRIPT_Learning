var persona = {
    nombre: "Fulano Mengano",
    mostrarNombre: function() {
        console.log(this.nombre);
    }
};

var estudiante = Object.create(persona);
estudiante.nombre = 'Zutano Mengano';

estudiante.mostrarNombre(); // Salida: Zutano Mengano