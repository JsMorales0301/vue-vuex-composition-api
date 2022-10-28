<template>
  <h1 class="text-center">GetMultipleCharacters</h1>
  <div class="d-flex justify-content-center align-items-center">
    <form @submit.prevent="getMultipleCharacters">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Ingrese varios ID de personajes seguidos de ','</label
        >
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
  <div
    v-if="characters"
    class="
      container
      d-flex
      justify-content-center
      align-items-center
      flex-wrap
      gap-4
      mb-4
    "
  >
    <Card :characters="characters" />
  </div>
</template>

<script>
import rickApi from "@/api/rickMorty";
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  components: {
    Card: defineAsyncComponent(() =>
      import("@/modules/characters/components/Card.vue")
    ),
  },
  data() {
    return {
      id: null,
      characters: null,
    };
  },
  methods: {
    async getMultipleCharacters() {
      const { data } = await rickApi.get(`/character/${this.id}`);
      this.characters = data;
    },
  },
};
</script>