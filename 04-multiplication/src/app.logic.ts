import fs from "fs";
function returnTablaFive(tabla: number): string {
  let text = `
====================================================
                Tabla del ${tabla}
====================================================\n
`;
  const outputPath = `outputs`;

  fs.mkdirSync(outputPath, { recursive: true });
  for (let i = 1; i < 11; i++) {
    text += `${tabla} x ${i} = ${tabla * i}\n`;
  }
  fs.writeFileSync(`${outputPath}/tabla-${tabla}.txt`, text);
  return text;
}

console.log(returnTablaFive(6));
