<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <CustomItemMenu v-for="link in links" :key="link.to" :link="link" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import CustomItemMenu from "./CustomItemMenu.vue";

export default {
  data() {
    return {
      links: [
        { to: "get-all-characters", name: "All Characters" },
        { to: "get-multiple-characters", name: "Multiple Characters" },
        { to: "get-single-character", name: "Single Character" },
        { to: "create-character", name: "Create Character" },
      ],
    };
  },
  components: { CustomItemMenu },
};
</script>