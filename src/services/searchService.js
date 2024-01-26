import axios from 'axios'

import { VAL_SEARCH_POKE } from '../Contants/constVarStorage'

const setAllNamePokeForSearch = async () => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
        const pokemonList = []
        response.data.results.forEach(element => {
            pokemonList.push(element.name)
        });
        localStorage.setItem(VAL_SEARCH_POKE, JSON.stringify(pokemonList))
    } catch (err) {
        console.log('Error:', err);
        throw err;
    }
}

export const getNameForSearch = async () => {
    if(!JSON.parse(localStorage.getItem(VAL_SEARCH_POKE))){
        await setAllNamePokeForSearch()
    }
    return JSON.parse(localStorage.getItem(VAL_SEARCH_POKE)) || []
}