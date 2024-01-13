# Funcion fetch()
la función fetch en JavaScript se utiliza para realizar **solicitudes HTT**, tanto a *hosts externos como a archivos locales dentro del proyecto sin necesidad de utilizar HTTP*.

+ La función fetch es una API moderna que utiliza promesas en JavaScript para realizar solicitudes HTTP de forma asíncrona. Es más legible y cómoda de usar en comparación con el antiguo método XMLHttpRequest. Puedes utilizar fetch para obtener datos de archivos JSON, imágenes, archivos de texto u otros recursos que estén disponibles localmente en tu proyecto.

Aquí tienes un ejemplo de cómo utilizar fetch para obtener datos de un archivo JSON local en tu proyecto:

```javascript
fetch('ruta/al/archivo.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos del archivo JSON
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
```
En este ejemplo, fetch se utiliza para realizar una solicitud al archivo JSON local especificado por la ruta 'ruta/al/archivo.json'. Luego, se utiliza el método json() en la respuesta para convertir los datos en un objeto JSON. Finalmente, puedes trabajar con los datos obtenidos en la función de then.

---
# Trasbambalinas, estructura de Fetch.
Esta es la implementación básica de cómo funciona la función fetch por debajo:
```javascript
function fetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error(xhr.statusText));
      }
    };

    xhr.onerror = function() {
      reject(new Error('Error de red'));
    };

    xhr.send();
  });
}
```
En esta implementación, se crea una nueva instancia de la clase XMLHttpRequest y se abre una conexión utilizando el método open con el método de solicitud y la URL proporcionada. Luego, se configuran los controladores de eventos onload y onerror para manejar las respuestas y los errores de la solicitud.

+ Cuando la solicitud se completa exitosamente (onload), se verifica el estado de la respuesta y se resuelve la promesa con la respuesta (xhr.response). Si la solicitud falla (onerror), se rechaza la promesa con un mensaje de error.

Esta es una implementación simplificada de cómo funciona fetch en el fondo. La versión real de fetch en JavaScript tiene más características y opciones, como enviar datos en el cuerpo de la solicitud y configurar encabezados personalizados.

## Se sigue usando XMLHttpRequest?
Si claro, La función fetch utiliza XMLHttpRequest detrás de escenas para realizar las solicitudes HTTP. Sin embargo, la sintaxis de fetch es más legible y moderna en comparación con XMLHttpRequest, lo que la hace más fácil de usar y entender.

Cuando utilizas fetch, la respuesta que obtienes siempre es un objeto Response. Este objeto contiene información sobre la respuesta HTTP, como el estado de la respuesta, los encabezados y el cuerpo de la respuesta. Puedes acceder a los datos de la respuesta utilizando los métodos proporcionados por el objeto Response, como json() para obtener los datos en formato JSON, text() para obtener los datos como texto, o blob() para obtener los datos como un objeto Blob.