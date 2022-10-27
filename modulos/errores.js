function otraFuncion() {
  seRompre();
}

function seRompre() {
  return 3 + z;
}

// aqui no funciona el catch, esta por fuera del loop principal. Se soluciona con tryCatch en el último return.
function seRompeAsync() {
  setTimeout(() => {
    try {
        return 3 + a;
    } catch (error) {
        console.log(error.message);
        console.log("Se capturó el error async.");
    }
  }, 1000);
}

try {
    // otraFuncion();
  seRompeAsync();
} catch (error) {
  console.log(error.message);
  console.log("Se capturó el error.");
}

console.log("Termina proceso.");
