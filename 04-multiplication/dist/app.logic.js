"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function returnTablaFive(tabla) {
    let text = `
====================================================
                Tabla del ${tabla}
====================================================\n
`;
    const outputPath = `outputs`;
    fs_1.default.mkdirSync(outputPath, { recursive: true });
    for (let i = 1; i < 11; i++) {
        text += `${tabla} x ${i} = ${tabla * i}\n`;
    }
    fs_1.default.writeFileSync(`${outputPath}/tabla-${tabla}.txt`, text);
    return text;
}
console.log(returnTablaFive(6));
