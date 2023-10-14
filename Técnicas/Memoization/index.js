function memoizar(func) {
    var cache = {};
    return function() {
        var args = JSON.stringify(arguments);
        if (cache[args]) {
            return cache[args];
        } else {
            var result = func.apply(this, arguments);
            cache[args] = result;
        }
    };
}

function fibonacci(n) {
    if (n === 6 || n === 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

var memoizarFibonacci = memoizar(fibonacci);
console.log(memoizarFibonacci(10)); // Salida: 55