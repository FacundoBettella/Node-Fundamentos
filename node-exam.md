¿Cuál es el motor de JavaScript sobre el que corre Node?
V8


2.
Cuando un evento llega al Event Loop, ¿dónde lo manda Node?
Al thread pool


3.
¿Cómo accedemos a una variable de entorno llamada NOMBRE?
process.env.NOMBRE


4.
¿Qué pasa si salta un error no capturado en el hilo principal?
El proceso se detiene


5.
¿Cual es la herramienta más adecuada para ejecutar nuestros procesos de Node en producción?
Simplemente Node // MAL!


6.
¿Cómo se le llama a la función que se ejecuta cuando termina otra función asíncrona?
Callback


7.
¿Cuál es la mejor forma de evitar un Callback Hell?
Todas son correctas


8.
¿Cuántos parámetros puede recibir el then de una promesa?

promise
    .then()
    .catch()
Solo uno


9.
¿Se puede usar la palabra reservada "await" en cualquier sitio?
No, solo en funciones declaradas con async


10.
¿Cuál de los siguientes módulos NO está en los módulos globales?

crypto


11.
¿Cómo indentamos un nivel los logs de consola?
console.group


12.
Por defecto, ¿cómo detectamos que un fichero se ha escrito con fs.writeFile?
Con el callback


13.
Cuando se lanzan excepciones, ¿cómo las capturamos?
Con try / catch


14.
¿Se pueden ejecutar comandos del sistema desde NodeJS? ¿Cómo?
Si, con procesos hijo


15.
¿En qué lenguajes se pueden desarrollar módulos nativos para NodeJS?
En cualquier lenguaje // MAL! 
Respuesta correcta (?): C++ y JS


16.
¿En qué puerto se puede iniciar un servidor HTTP en Node?
En cualquiera


17.
¿Podemos acceder a la memoria disponible y total del sistema operativo desde NodeJS?
Si, con el módulo OS


18.
¿Podemos controlar cuando se cierra el proceso de Node, y ejecutar código antes de que muera?
Si, con el módulo Process


19.
¿Dónde se listan las dependencias de nuestro proyecto?
En el package.json


20.
Cuando creamos un módulo, ¿podemos exportar mas de una entidad?
Si, tantas como queramos


21.
¿Qué módulo nos permite trabajar con imágenes desde NodeJS?
Sharp


22.
¿Cuál es la principal ventaja de trabajar en memoria frente a la lectura y escritura en disco?
La velocidad es mayor


23.
¿Qué es un Buffer?
Un conjunto de datos crudos


24.
¿Puede un stream transformar datos?
Si, usando un stream de transformación


25.
¿Cómo sabemos lo que tarda un trozo de código en ejecutarse?
Usando console.time


26.
¿Podemos parar el código en un punto determinado mientras se ejecuta?
Si, con el debugger


27.
En un callback, ¿cuál debería ser el primer parámetro?
El error


28.
¿Podemos usar NodeJS para acceder al DOM de un sitio externo y extraer información de él?
Si, con puppeteer


29.
¿Qué herramienta nos permite crear tareas en NodeJS para automatizar procesos?
Gulp


30.
¿Se puede usar NodeJS para crear aplicaciones de escritorio?
Si, con Electron