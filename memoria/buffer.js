/*  
    Buffer
    Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.

    Es la forma mas CRUDA en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato).

    En la consola, los datos se muestran en formato hexadecimal.

    <h3>Creacion de un bufer básico</h3>
    Para crear un buffer, con 4 espacios por ejemplo, podemos hacerlo con la siguiente sintaxis:

*/

// let buffer = Buffer.alloc(4); // <Buffer 00 00 00 00>
// let buffer = Buffer.from([1, 3, 5]); // <Buffer 01 03 05>
// let buffer = Buffer.from("Holitas"); // <Buffer 48 6f 6c 69 74 61 73>

// console.log(buffer.toString());

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97; // 97 = "a"
}
console.log(abc.toString());
