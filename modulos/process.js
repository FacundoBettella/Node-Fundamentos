// const process = require("process"); // No hace falta importarlo por lo que es parte del objeto Global.

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});


// Una vez ejecutado "exit" ya nos hemos desconectado del eventloop.
process.on("exit", () => {
    console.log("El proceso termino");
});

process.on("uncaughtException", (error, origen) => {
    console.error("Se nos olvido capturar un error");
    console.error(origen, error);
});

functionQueNoExiste();
