const bcrypt = require("bcrypt");

const password = "123Segura!";

/* 1: pass a hashear, 2: n° de veces que se aplicara el algoritmo hasheador, 3: cb */
bcrypt.hash(password, 5, (error, hash) => {
  console.log(hash);

  bcrypt.compare(password, hash, (error, res) => {
    console.log(error);
    console.log(res);
  });
});
