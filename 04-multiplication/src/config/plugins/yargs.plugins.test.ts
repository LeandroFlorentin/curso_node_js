import { yarg } from "./yargs.plugins";

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import("./yargs.plugins");
  return yarg;
};

describe("Test yargs.plugin.ts", () => {
  test("should return default values", async () => {
    const argv = await runCommand([]);
    console.log(argv);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 2,
        l: 10,
        s: false,
        n: "table",
        d: "./outputs",
      })
    );
  });
});
