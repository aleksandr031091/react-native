<template>
  <div v-if="this.film.episode_id">
    <h2 class="items">{{ this.film.title }}</h2>
    <p class="items">{{ this.film.opening_crawl }}</p>
    <p class="items">episode: ({{ this.film.episode_id }})</p>
    <p class="items">
      release date:
      {{ this.film.release_date.split("-").reverse().join("-") }}
    </p>
    <p class="items">director: {{ this.film.director }}</p>
    <p class="items">producer: {{ this.film.producer }}</p>
    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FilmInfo",

  computed: mapGetters(["film"]),
};
</script>

<style scoped>
.items {
  margin-bottom: 20px;
}
</style>
