<template>
  <div class="card p-4">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="InputName" class="form-label">Name</label>
        <input type="text" class="form-control" id="InputName" v-model="characterForm.name"/>
      </div>
      <div class="mb-3">
        <label for="InputState" class="form-label">State</label>
        <select class="form-select" aria-label="Default select example" v-model="characterForm.state">
          <option v-for="statu in status" :key="statu.id">
            {{ statu.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="InputSpecie" class="form-label">Specie</label>
        <select class="form-select" aria-label="Default select example" v-model="characterForm.specie">
          <option v-for="(specie, index) in species" :key="index">
            {{ specie }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="InputLocation" class="form-label">Location</label>
        <select class="form-select" aria-label="Default select example" v-model="characterForm.location">
          <option v-for="location in locations" :key="location.id">
            {{ location.name }}
          </option>
        </select>
      </div>

      <div class="d-flex justify-content-end align-items-around">
        <button type="reset" class="btn btn-warning me-2">Reset</button>
        <button type="submit" class="btn btn-success">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  setup(){

    const store = useStore()
    
    onMounted(() => {
      store.dispatch('character/loadLocations')
      store.dispatch('character/loadSpecies')
    })

    const characterForm = ref({
      name: '',
      state: '',
      specie: '',
      location: ''
    })
    
    
    return{
      locations: computed(() => store.state.character.locations),
      species: computed(() => store.state.character.species),
      status: computed(() => store.state.character.status),
      characterForm,

      onSubmit(){
        store.dispatch('character/createCharacter', characterForm.value)
        store.dispatch('character/loadCharacters')
      }
    }
  }
};
</script>

<style>
</style>