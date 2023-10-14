function repetir (f, n) {
    for (var i = 0; i < n; i++) {
        f(i)
    }
}

function imprimirNumero(n) {
    console.log(n);
}
repetir(imprimirNumero, 5);