<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="character.image" class="img-fluid rounded-start" :alt="character.name" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ character.name }}</h5>
          
          <div class="d-flex justify-content-start align-items-center">
            <span :class="assignStatusCharacter(character.status)"></span>
            <p class="card-text">
              {{ character.status }} - {{ character.species }} - {{ character.gender }}
            </p>
          </div>
          <p class="card-text">
            <small class="text-muted">Location: {{ character.location.name }}</small>
          </p>
          <p class="card-text">
            <small class="text-muted">Origin: {{ character.origin.name }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/modules/characters/css/styles.css'

export default{
  props: {
    character: {
      type: Object,
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