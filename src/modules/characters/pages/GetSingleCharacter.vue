<template>
  <h1 class="text-center">Get Single Character</h1>
  <div class="d-flex justify-content-center align-items-center">
      <form @submit.prevent="">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Ingrese el ID del personaje</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="id"
          />
        </div>
      </form>
  </div>
  <div v-if="this.character" class="d-flex justify-content-center align-items-center">
      <CardCharacter :character="character"/>
  </div>
</template>

<script>
import rickApi from '@/api/rickMorty';
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    components: {
        CardCharacter: defineAsyncComponent(() => import('@/modules/characters/components/CardCharacter.vue'))
    },
    data(){
        return {
            character: null,
            id: null
        }
    },
    methods: {
        async getSingleCharacter(){
            const { data } = await rickApi.get(`/character/${ this.id }`)
            this.character = data
        }
    },
    watch: {
        id(){
            setTimeout(() => {
                this.getSingleCharacter()
            }, 1500);
        }
    }
};
</script>