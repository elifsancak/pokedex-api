const id = (pokeData, id) => {
    if (pokeData.find(pkmn => pkmn.id === id)) {
        return pokeData.find(pkmn => pkmn.id === id);
    } 
    else { 
        return {};
    }
}

module.exports = id;
