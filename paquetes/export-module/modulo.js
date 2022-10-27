function saludar() {
  console.log("Hola mundillo!");
}

module.exports = {
  saludar,
  prop1: () => {
    console.log("Soy una prop");
  },
};
