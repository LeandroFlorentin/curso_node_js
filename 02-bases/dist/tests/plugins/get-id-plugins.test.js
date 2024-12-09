"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("../../plugins");
describe("plugins/get-id.plugins.ts", () => {
    test("getUUID() should return a UUID", () => {
        const uuid = (0, plugins_1.getUUID)();
        expect(typeof uuid).toBe("string");
        expect(uuid.length).toBe(36);
    });
});
