import axios from 'axios'

export const getPokemonDetails = async (name) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
};

export const getAllPokemons = async (offset = 0) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset * 20}&limit=20`);
    const pokemonList = response.data.results;

    const pokemonDetailsPromises = pokemonList.map((pokemon) => {
      return getPokemonDetails(pokemon.name)
    }
    );

    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    return pokemonDetails;
  } catch (err) {
    console.log('Error:', err);
    throw err;
  }
};

export const getTotalPage = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    return Math.floor(response.data.count / 20);
  } catch (err) {
    console.log('error: ', err)
    throw err
  }
}