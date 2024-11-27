import { getUserById } from "../../js-foundation/03-callbacks";

describe("js-foundation/callback.js", () => {
  test("getUserById should return and error if user does not exist", (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`USUARIO no encontrado ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  test("getUserById should return and error if user does exist", (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ name: "John Doe", id });
      done();
    });
  });
});
