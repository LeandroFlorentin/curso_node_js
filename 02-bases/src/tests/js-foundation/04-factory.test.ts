import { buildMakePerson } from "../../js-foundation/04-factory";

describe("js-foundation/04-factory.ts", () => {
  const getUUID = () => "1234";
  const getAge = () => 35;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getAge, getUUID });
    const person = makePerson({ name: "Leandro", birthdate: "200-07-10" });
    expect(person).toEqual({
      id: "1234",
      age: 35,
      name: "Leandro",
      birthdate: "200-07-10",
    });
  });
});
