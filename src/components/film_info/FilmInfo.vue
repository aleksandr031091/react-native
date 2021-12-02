<template>
  <div v-if="this.film.episode_id">
    <h2 class="film_items">{{ this.film.title }}</h2>
    <p class="film_items">{{ this.film.opening_crawl }}</p>
    <p class="film_items">episode: ({{ this.film.episode_id }})</p>
    <p class="film_items">
      release date:
      {{ this.film.release_date.split("-").reverse().join("-") }}
    </p>
    <p class="film_items">director: {{ this.film.director }}</p>
    <p class="film_items">producer: {{ this.film.producer }}</p>
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
.film_items {
  margin-bottom: 20px;
}
</style>
