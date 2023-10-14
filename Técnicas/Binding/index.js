var persona = {
    nombre: "Fulano Mengano",
    mostrarNombre: function() {
        console.log(this.nombre);
    }
};

var vincularMostrarNombre = persona.mostrarNombre.bind(persona);
vincularMostrarNombre(); // Salida: Fulano Mengano