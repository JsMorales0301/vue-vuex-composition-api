import { createStore } from 'vuex'

import character from '@/modules/characters/store/characters'

export default createStore({
  modules: {
    character
  }
})
