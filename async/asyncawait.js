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
    }, 5000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}

console.log("Iniciando el proceso..");

async function main() {
  let nombre = await hola("Kevin");
  await hablar();
  await adios(nombre);
}

main();
console.log("Terminando el proceso..");
