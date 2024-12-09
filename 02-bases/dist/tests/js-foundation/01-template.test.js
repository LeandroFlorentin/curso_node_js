"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_template_1 = require("../../js-foundation/01-template");
describe("js-foundation/01-template.t", () => {
    test("emailTemplate should containt a greeting", () => {
        expect(_01_template_1.emailTemplate).toContain("Hola, ");
    });
    test("emailTemplate should contain {{name}} and {{orderId}}", () => {
        expect(_01_template_1.emailTemplate).toMatch(/{{name}}/);
        expect(_01_template_1.emailTemplate).toMatch(/{{orderId}}/);
    });
});
