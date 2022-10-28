<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Status</th>
        <th scope="col">Specie</th>
        <th scope="col">Location</th>
        <th scope="col">Image</th>
        <th colspan="2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(createdCharacter, index) in createdCharacters" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ createdCharacter.name }}</td>
        <td>{{ createdCharacter.state }}</td>
        <td>{{ createdCharacter.specie }}</td>
        <td>{{ createdCharacter.location }}</td>
        <td>1</td>
        <td>
          <button class="btn btn-warning me-2">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  setup(){

    const store = useStore()


    onMounted(() => {
      store.dispatch('character/loadCharacters')
    })

    return{
      createdCharacters: computed(() => store.state.character.charactersCreated)
    }
  }
};
</script>

<style>
</style>