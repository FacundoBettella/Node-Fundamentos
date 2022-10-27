function saludar() {
  console.log("Hola mundillo!");
}

export default {
  saludar,
  prop1: () => {
    console.log("¡Soy una prop en un modulo experimental!");
  },
};
