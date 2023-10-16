Programación funcional
La programación funcional es un estilo de programación en el que las soluciones son funciones simples y aisladas, sin efectos secundarios fuera del ámbito de la función: ENTRADA -> PROCESO -> SALIDA

La programación funcional consiste en:

1. Funciones aisladas (isolated functions): no hay dependencia del estado del programa, lo que incluye variables globales que están sujetas a cambios.

2. Funciones puras (pure functions): la misma entrada siempre da la misma salida.

3. Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función se controla cuidadosamente.

### Terminología funcional
vamos a cubrir un poco de terminología funcional:

Callbacks son las funciones que se deslizan o se pasan a otra función para decidir la invocación de esa función. Puede que las hayas visto pasadas a otros métodos, por ejemplo en filter, la función callback le dice a JavaScript el criterio de cómo filtrar un array.

Las funciones que pueden asignarse a una variable, pasarse a otra función o devolverse desde otra función como cualquier otro valor normal, se denominan funciones de primera clase. En JavaScript, todas las funciones son funciones de primera clase.

Las funciones que toman una función como argumento, o devuelven una función como valor de retorno, se denominan funciones de orden superior.

Cuando se pasan funciones a otra función o se devuelven desde otra función, entonces esas funciones que se pasaron o se devolvieron pueden llamarse lambda.