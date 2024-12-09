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
Object.defineProperty(exports, "__esModule", { value: true });
const _06_promises_1 = require("../../js-foundation/06-promises");
describe("js-foundation/06-promises.ts", () => {
    test("getPokemonById should return a pokemon", () => __awaiter(void 0, void 0, void 0, function* () {
        const pokemonId = 1;
        const pokemonName = yield (0, _06_promises_1.getPokemonById)(pokemonId);
        expect(pokemonName).toBe("bulbasaur");
    }));
    test("Should return an error if pokemon does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        const pokemonId = 10000000000;
        try {
            yield (0, _06_promises_1.getPokemonById)(pokemonId);
            expect(true).toBeFalsy();
        }
        catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
        }
    }));
});
