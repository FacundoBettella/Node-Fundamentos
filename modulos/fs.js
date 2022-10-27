// Todo en fs se ejecuta de forma asincrona por conveniencia.
const fs = require("fs");

function leer(ruta) {
  fs.readFile(ruta, (error, data) => {
    // leido
    console.log(data.toString());
  });
}

function escribir(ruta, contenido) {
  fs.writeFile(ruta, contenido, (error, data) => {
    if (error) console.log(error);
    else console.log("Se ha escrito correctamente");
  });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

leer(__dirname + "/archivo.txt");
escribir(__dirname + "/archivo_nuevo.txt", "Holitassss desde fs.");
borrar(__dirname + "/archivo_nuevo.txt", console.log); // Devuelve null porque no hay ningun error en el delete. 
