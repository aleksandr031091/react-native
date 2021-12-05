<template>
  <div v-if="this.film.episode_id">
    <h2 class="items">{{ this.film.title }}</h2>
    <p class="items">{{ this.film.opening_crawl }}</p>
    <p class="items">
      <span class="items_title">episode</span>: ({{ this.film.episode_id }})
    </p>
    <p class="items">
      <span class="items_title">release date</span>:
      {{ this.film.release_date.split("-").reverse().join("-") }}
    </p>
    <p class="items">
      <span class="items_title">director</span>: {{ this.film.director }}
    </p>
    <p class="items">
      <span class="items_title">producer</span>: {{ this.film.producer }}
    </p>
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

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.items {
  margin-bottom: 20px;

  &_title {
    font-weight: 500;
    color: $listTitleColor;
  }
}
</style>
