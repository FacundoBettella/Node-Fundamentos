const http = require("http");

// Servidor creado
http
  .createServer((req, res) => {
    console.log("Nueva peticion");
    console.log(req.url);

    switch (req.url) {
      case "/hola":
        // Header
        res.writeHead(201, { "Content-Type": "text/plain" });
        // Respuesta al usuario.
        res.write("Hola ya se usar http de node.js");
        break;

      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Error 404: url not found");
        break;
    }

    res.end();
  })
  .listen(8080);

console.log("Escuchando http en el puerto 8080");
