console.log("INICIO");

setTimeout(() => {
  console.log("PRIMERO");
}, 3000);

setTimeout(() => {
  console.log("SEGUNDO");
}, 0);

setTimeout(() => {
  console.log("TERCERO");
}, 0);

console.log("FINAL");
