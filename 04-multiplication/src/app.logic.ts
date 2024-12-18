import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugins";

type TYarg = {
  b?: number;
  base?: number;
  l?: number;
  limit?: number;
  s?: boolean;
  show?: boolean;
};

function returnTablaFive({ b, l, s }: TYarg): void {
  const base = b!;
  const limit = l!;
  const show = s!;

  let text = `
====================================================
                Tabla del ${base}
====================================================\n
`;
  const outputPath = `outputs`;

  for (let i = 1; i < limit + 1; i++) {
    text += `${base} x ${i} = ${base * i}\n`;
  }

  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, text);

  show && console.log(text);
}

returnTablaFive(yarg);
