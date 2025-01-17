"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_plugins_1 = require("./config/plugins/yargs.plugins");
const server_app_1 = __importDefault(require("./presentation/server-app"));
(() => {
    main();
})();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { b: base, l: limit, s: showTable, n: name, d: destination } = yargs_plugins_1.yarg;
        server_app_1.default.run({ base, limit, showTable, name, destination });
    });
}
