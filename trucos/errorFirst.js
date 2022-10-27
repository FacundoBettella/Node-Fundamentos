/*
    Error First Callbacks
    Un patrón que se sigue siempre en cualquier lenguaje y programa de devs es Error First Callbacks, 
    esto quiere decir que siempre que tengamos un callback el primer parámetro debería ser el error.
*/

function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      //Evitamos que el error se dispare aqui para manejarlo con su callback.
      callback(error);
    }
  }, 1000);
}

asincrona((error, data) => {
  if (error) {
    console.error("We have a problem");
    console.error(error.message);
    return false;
    // throw error; //En funciones asincronas no va a funcionar.
  }

  console.log("No tenemos problemas querido Houston.", data);
});
