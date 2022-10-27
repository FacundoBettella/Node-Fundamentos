function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 0);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla, bla, bla...");
      nombre = "Bruné";
      resolve(nombre);
    }, 0);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios " + nombre);
      reject("An error occurs");
    }, 1000);
  });
}

console.log("Iniciando el proceso..");

hola("Bruno")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log("Terminado el proceso");
  })
  .catch((error) => {
    console.log(error);
  });
