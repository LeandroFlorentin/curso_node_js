import { http } from "../plugins/http-client";

const getPokemonById = async (id: number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;
  } catch (error) {
    throw "Pokemon not found with id " + id;
  }
};

export { getPokemonById };
