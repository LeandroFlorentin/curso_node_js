import { emailTemplate } from "../../js-foundation/01-template";
describe("js-foundation/01-template.t", () => {
  test("emailTemplate should containt a greeting", () => {
    expect(emailTemplate).toContain("Hola, ");
  });
  test("emailTemplate should contain {{name}} and {{orderId}}", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
