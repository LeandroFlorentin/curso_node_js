const fs = require("fs");

const content = fs.readFileSync("README.md", "utf-8");

const { length } = content.split(" ");

const reactWordCount = content.match(/React/gi ?? []).length;

console.log("Cuantas palabras? " + length);
console.log("Palabras React? " + reactWordCount);
