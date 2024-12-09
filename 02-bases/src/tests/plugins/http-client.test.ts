import { http } from "../../plugins";

describe("plugins/http-client.ts", () => {
  test("http.get() should return a string", async () => {
    const data = await http.get("https://jsonplaceholder.typicode.com/todos/1");
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });
});
