import { http } from "../plugins/index.js";

const getPokemonById = async (id: number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await http.get(url);
  const pokemon = await response.json();
  return pokemon.name;
};

export { getPokemonById };
