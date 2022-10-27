let suma = 0;
let suma2 = 0;
function asyncrona() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(() => console.log("Termine"));
    }, 6000);
  });
}

console.time("todo");
console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

console.time("asyncrono");
asyncrona().then(() => {
  console.timeEnd("asyncrono");
});

console.time("bucle2");
for (let i = 0; i < 10000000; i++) {
  suma += 1;
}
console.timeEnd("bucle2");
console.timeEnd("todo");
