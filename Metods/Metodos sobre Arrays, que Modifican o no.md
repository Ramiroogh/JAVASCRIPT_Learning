# Metodos sobre arrays

Esta es una lista de métodos comunes en JavaScript que operan sobre arrays, clasificados según si modifican el array original y si crean un nuevo array:

### Métodos que Modifican el Array Original:
1. **push()**
   - Descripción: Añade uno o más elementos al final del array.
   - Modifica el Array Original: Sí
   - Crea un Nuevo Array: No

2. **pop()**
   - Descripción: Elimina el último elemento del array.
   - Modifica el Array Original: Sí
   - Crea un Nuevo Array: No

3. **shift()**
   - Descripción: Elimina el primer elemento del array.
   - Modifica el Array Original: Sí
   - Crea un Nuevo Array: No

4. **unshift()**
   - Descripción: Añade uno o más elementos al inicio del array.
   - Modifica el Array Original: Sí
   - Crea un Nuevo Array: No

5. **splice(start, deleteCount, ...items)**
   - Descripción: Elimina o reemplaza elementos existentes y/o añade nuevos elementos.
   - Modifica el Array Original: Sí
   - Crea un Nuevo Array: No (Aunque los elementos eliminados se devuelven)

### Métodos que No Modifican el Array Original:
1. **concat()**
   - Descripción: Combina dos o más arrays, creando uno nuevo.
   - Modifica el Array Original: No
   - Crea un Nuevo Array: Sí

2. **slice(start, end)**
   - Descripción: Devuelve una porción del array sin modificar el original.
   - Modifica el Array Original: No
   - Crea un Nuevo Array: Sí

3. **filter(callback)**
   - Descripción: Crea un nuevo array con los elementos que cumplen una condición.
   - Modifica el Array Original: No
   - Crea un Nuevo Array: Sí

4. **map(callback)**
   - Descripción: Crea un nuevo array aplicando una función a cada elemento.
   - Modifica el Array Original: No
   - Crea un Nuevo Array: Sí

5. **join(separator)**
   - Descripción: Convierte los elementos del array en una cadena usando un separador.
   - Modifica el Array Original: No
   - Crea un Nuevo Array: No

6. **concat()**
   - Descripción: Combina dos o más arrays, creando uno nuevo.
   - Modifica el Array Original: No
   - Crea un Nuevo Array: Sí

7. **every(callback)**
   - Descripción: Verifica si todos los elementos cumplen una condición.
   - Modifica el Array Original: No
   - Crea un Nuevo Array: No

8. **some(callback)**
   - Descripción: Verifica si al menos un elemento cumple una condición.
   - Modifica el Array Original: No
   - Crea un Nuevo Array: No

Estos son solo algunos de los métodos más comunes, pero hay otros en JavaScript que también trabajan con arrays. Es importante leer la documentación oficial para obtener información completa sobre cada método y sus comportamientos específicos.