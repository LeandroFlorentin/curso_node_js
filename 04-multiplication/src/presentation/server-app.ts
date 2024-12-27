import { CreateTable } from "../domain/uses-cases/create-table.use-case";
import { SaveFile } from "../domain/uses-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

export default class ServerApp {
  static run({ base, limit, showTable }: RunOptions) {
    console.log("Server running ...");
    const table = new CreateTable().execute({ base, limit });
    try {
      const wasCreated = new SaveFile().execute({
        fileContent: table,
        fileName: `outputs/table-${base}`,
      });
      console.log("File was created: ");
    } catch (error) {
      console.log("Error created file: ", error);
    }
    if (showTable) console.log(table);
  }
}
