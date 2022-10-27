/*
    ** Stream**
    Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no editarlos) ya que lo vemos al mismo tiempo en que este se está descargando. de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.
    
    --buffer--
    Si en el caso anterior, mientras vemos el video, fallara el internet, así sea por un segundo, la reproducción se pararía instantáneamente. Pero sabemos que en realidad no es así, el video continúa reproduciéndose por un tiempo mas. Esto es gracias a la implementación de un buffer el cuál es un espacio en memoria ram en donde la información proveniente del servidor llega por fragmentos (chunks), para luego ser consumido, y como ese almacenamiento de datos en el buffer se hace a bajo nivel, de forma binaria, el proceso es mucho mas rápido de lo que se consume. Es por eso que cuando reproducimos un video en Youtube vemos que este se carga mas rápido. (depediendo del ancho de banda claro está)
*/

const fs = require("fs");
const stream = require("stream");
const util = require("util");

// let data = "";
let readableStream = fs.createReadStream("../modulos/archivo.txt");

// readableStream.setEncoding("utf-8");
// readableStream.on("data", (chunks) => {
//     data += chunks;
// });

// readableStream.on("end", () => {
//   console.log(data);
// });

// buffer de escritura
// process.stdout.write("Como");
// process.stdout.write("te");
// process.stdout.write("va?");

const Transform = stream.Transform;

// En esta función se ejecuta la transformacion (this).
function Mayus() {
  Transform.call(this);
}
// Creo una instancia de la clase Transform y estableciéndolo como prototipo a la función Mayus,
// tambien adjuntando el EventEmmitter, es decir el Transform.Call(this). Es como llamar al metodo Super().
util.inherits(Mayus, Transform);

// _transform significa que la transformación será personalizada.
Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();

// pipe() Limita el almacenamiento en el buffer para que no haya una sobresaturacion a la hora se pasar la secuencia de los datos.
readableStream.pipe(mayus).pipe(process.stdout);


/*
    Las Streams son colecciones de datos, como matrices o cadenas. La diferencia es que las transmisiones pueden no estar disponibles de una vez y no tienen que caber en la memoria. Esto hace que las transmisiones sean realmente poderosas cuando se trabaja con grandes cantidades de datos, o datos que provienen de una fuente externa o un fragmento a la vez.

    const fs = require("fs");
    const server = require("http").createServer();
    
    server.on("request", (req, res) => {
      const src = fs.createReadStream("./big.file");
      src.pipe(res);
    });
    
    server.listen(8000);

    Cuando un cliente solicita ese archivo grande, lo transmitimos un fragmento a la vez, lo que significa que no lo almacenamos en la memoria intermedia.
*/

