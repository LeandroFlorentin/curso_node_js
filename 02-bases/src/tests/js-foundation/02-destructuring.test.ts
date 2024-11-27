import characters from "../../js-foundation/02-destructiring";

describe("js-foundation/02-destructuring.ts", () => {
  test("character should containt Flash, Superman", () => {
    const contains = ["Flash", "Superman"];
    contains.forEach((cont) => expect(characters).toContain(cont));
  });

  test("First character should be Flash, and second Superman", () => {
    const [flash, superman] = characters;
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
