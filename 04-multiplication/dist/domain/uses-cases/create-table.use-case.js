"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() {
        /*
         *DI - Dependency Injection
         */
    }
    execute({ base, limit = 10 }) {
        let text = "";
        for (let i = 1; i < limit + 1; i++) {
            text += `${base} x ${i} = ${base * i}\n`;
        }
        return text;
    }
}
exports.CreateTable = CreateTable;
