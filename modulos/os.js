const os = require("os");

console.log(os.arch()); //  x64

console.log(os.platform()); //  win32

console.log(os.cpus()); // 8nucleos 11th intel

console.log(os.constants); // errores de sistema

// Memoria ram libre en bytes.
console.log(os.freemem()); 
const SIZE = 1024;
function kilobytes(bytes) { return bytes / SIZE }
function megabytes(bytes) { return kilobytes(bytes) / SIZE }
function gigaBytes(bytes) { return megabytes(bytes) / SIZE }
console.log(kilobytes(os.freemem()));
console.log(megabytes(os.freemem()));
console.log(gigaBytes(os.freemem()));
console.log(gigaBytes(os.totalmem())); 

// Para guardar datos en el sistema operativo.
console.log(os.homedir())
console.log(os.tmpdir()) //directorios temporales (+Seguro)
console.log(os.hostname());
console.log(os.networkInterfaces()); // Interfaces de red