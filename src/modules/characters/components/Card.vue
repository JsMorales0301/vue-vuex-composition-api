<template>
  <div v-for="character in this.characters" :key="character.id"  class="card animate__backInDown" style="width: 18rem">
    <img :src="character.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title text-truncate"> {{ character.id }}. {{ character.name }}</h5>
      <div class="d-flex justify-content-start align-items-center">
        <span :class="assignStatusCharacter(character.status)"></span>
        <p class="card-text">{{ character.status }} - {{ character.species }}</p>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-truncate">
        Location: {{ character.location.name }}</li>
      <li class="list-group-item text-truncate">
        Origin: {{ character.origin.name }}</li>
    </ul>
  </div>
</template>

<script>

import '@/modules/characters/css/styles.css'
import 'animate.css';
export default {
  
  props: {
    characters: {
      type: Array,
      required: true 
    }
  },
  methods: {
    assignStatusCharacter(statusCharacter){
      const status = {
        'Alive': 'status-character-alive',
        'Dead': 'status-character-dead',
        'unknown': 'status-character-unknown'
      }
      return status[statusCharacter]
    }
  }

}
</script>

