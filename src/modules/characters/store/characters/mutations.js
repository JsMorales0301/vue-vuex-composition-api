

export const setLocations = ( state, locations ) => {
    state.locations = locations
}

export const setSpecies = ( state, species ) => {
    state.species = species
}

export const createCharacter = ( state, character ) => {
    state.charactersCreated = [character, ...state.charactersCreated]
}

export const setCharacter = ( state, characters ) => {
    state.charactersCreated = [ ...state.charactersCreated, ...characters ]
}