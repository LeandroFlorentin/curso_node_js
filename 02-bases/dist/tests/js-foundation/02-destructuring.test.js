"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _02_destructiring_1 = __importDefault(require("../../js-foundation/02-destructiring"));
describe("js-foundation/02-destructuring.ts", () => {
    test("character should containt Flash, Superman", () => {
        const contains = ["Flash", "Superman"];
        contains.forEach((cont) => expect(_02_destructiring_1.default).toContain(cont));
    });
    test("First character should be Flash, and second Superman", () => {
        const [flash, superman] = _02_destructiring_1.default;
        expect(flash).toBe("Flash");
        expect(superman).toBe("Superman");
    });
});
