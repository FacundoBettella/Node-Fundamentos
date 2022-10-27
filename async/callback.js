function soyAsincrona(nombre, miCallback) {
  setTimeout(() => {
    console.log("Asincronia");

    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 2000);
}

console.log("inicio proceso");

soyAsincrona("Benjamin", (nombre) => {
  adios(nombre, function () {
    console.log("Termino proceso");
  });
});

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}
