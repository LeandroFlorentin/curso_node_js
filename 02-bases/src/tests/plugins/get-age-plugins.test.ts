import { getAge } from "../../plugins";

describe("plugins/get-age.plugins.ts", () => {
  test("getage() should return the age of a person", () => {
    const birthdate = "1985-10-21";
    const age = getAge(birthdate);
    expect(typeof age).toBe("number");
  });

  test("getAge should return current age", () => {
    const birthdate = "1985-10-21";
    const age = getAge(birthdate);
    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculatedAge);
  });

  //forma de modificar el valor de Date con jest espia
  test("getAge should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);

    const birthdate = "1995-10-21";
    const age = getAge(birthdate);
    console.log("AGEEE", age);
  });
});
