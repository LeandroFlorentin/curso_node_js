"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_table_use_case_1 = require("../domain/uses-cases/create-table.use-case");
const save_file_use_case_1 = require("../domain/uses-cases/save-file.use-case");
class ServerApp {
    static run({ base, limit, showTable, destination, name }) {
        console.log("Server running ...");
        const table = new create_table_use_case_1.CreateTable().execute({ base, limit });
        try {
            const wasCreated = new save_file_use_case_1.SaveFile().execute({
                fileContent: table,
                fileName: `${destination}/${name}`,
                fileDestination: destination,
            });
            console.log("File was created: ");
        }
        catch (error) {
            console.log("Error created file: ", error);
        }
        if (showTable)
            console.log(table);
    }
}
exports.default = ServerApp;
