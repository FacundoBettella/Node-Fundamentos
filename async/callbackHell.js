function soyAsincrona(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 2000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla, bla, bla...");
    callbackHablar();
  }, 500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

const conversacion = (nombre, veces, callback) => {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
      --veces;
    });
  } else {
    adios(nombre, callback);
  }
};

console.log("inicio proceso");

/* Forma correcta de asincronia (Mediante funciones) */
soyAsincrona("Charly", (nombre) => {
  conversacion(nombre, 3, () => {
    console.log("Proceso terminado");
  });
});

/* Forma erronea de asincronia (CallbackHell) */
/*
    soyAsincrona("Benjamin", (nombre) => {
        hablar(() => {
            hablar(() => {
                hablar(() => {
                    adios(nombre, function () {
                        console.log("Termino proceso");
                    });
                });
            });
        });
    });
*/
