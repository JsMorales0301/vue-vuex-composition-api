import { computed, onUnmounted } from "vue"
import { useStore } from "vuex"

export const useCharacters = () => {

    const store = useStore()

    onUnmounted(() => {
        store.dispatch('character/loadLocations')
    })

    return{
        locations: computed( () => store.state.character.locations)
    }

}