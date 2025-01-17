import { CreateTable } from "./create-table.use-case";

describe("CreateTableUseCase", () => {
  test("should create table with default values", () => {
    const createTable = new CreateTable();

    const table = createTable.execute({ base: 2 });
    const rows = table.split("\n");
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(rows.length).toBe(10);
  });

  test("should create table with custom values", () => {
    const options = {
      base: 3,
      limit: 20,
    };
    const createTable = new CreateTable();
    const table = createTable.execute(options);
    const rowsLength = table.split("\n").length;

    expect(rowsLength).toBe(options.limit);
  });
});
