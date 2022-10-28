import rickApi from "@/api/rickMorty"


export const loadLocations = async({ commit }) => {
    
    const { data } = await rickApi.get('/location')
    let locations = []

    locations = data.results

    commit('setLocations', locations)
}

export const loadSpecies = async({ commit }) => {

    const { data } = await rickApi.get('/character', {
        params: {
            page: 2
        }
    })

    const species = data.results.map( result => result.species )

    const newSpecies = new Set([ ...species ])

    commit('setSpecies', newSpecies)
}

export const createCharacter = async ({ commit }, character) => {
    
    const oldData = JSON.parse(localStorage.getItem('charactersCreated')) || []
    
    let finalData = [ ...oldData, character ]

    await localStorage.setItem('charactersCreated', JSON.stringify(finalData))

    commit('createCharacter', finalData)
}

export const loadCharacters = ({ commit }) => {

    const data = JSON.parse(localStorage.getItem('charactersCreated')) || []
    commit('setCharacter', data)

}