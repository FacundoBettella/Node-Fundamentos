/*  Para trabajar con otros procesos por debajo sin necesidad de migrar a node, ej de uso seria necesitar un codigo que 
funciona mejor en python (scraping) puedo ejecutar comandos de sistema para extraer su resultado, por ej: "dir" o "node consola.js" */
const { exec, spawn } = require("child_process");

exec("node consola.js", (error, stdout, sterr) => {
  if (error) {
    console.log(error);
    return false;
  }
  console.log(stdout);
});

/* Spawn permite invocar un proceso nuevo de node. Ambos procesos funcionan */
// let proceso = spawn("dir"); 
let proceso = spawn('cmd.exe', ['/c','dir'])
console.log(proceso.pid, proceso.connected);

proceso.stdout.on("data", (dato) => {
  console.log("Esta muerto el proceso? ", proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", () => {
  console.log("Murio el proceso. ", proceso.killed);
});
