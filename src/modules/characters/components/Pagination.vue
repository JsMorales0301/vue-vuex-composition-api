<template>
  <nav aria-label="Page navigation example">
    <ul class="mt-4 pagination">
      <li class="page-item">
        <a class="page-link" @click="lastPage">Previous</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#">Page actual: {{ this.page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  methods: {
    nextPage() {
      this.$emit('onNextPage')
    },
    lastPage() {
      this.$emit('onLastPage')
    }
  }
}
</script>

<style scoped>
a{
  cursor: pointer;
}
</style>