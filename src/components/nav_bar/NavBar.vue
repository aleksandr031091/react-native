<template>
  <aside class="nav">
    <ul>
      <li
        class="nav_list_item"
        v-for="film of allFilms"
        :key="film.episode_id"
        @click="getFilmId(film.episode_id)"
      >
        {{ film.title }}
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "NavBar",

  methods: {
    ...mapMutations(["setFilm", "setIsSearching"]),

    getFilmId(episodeId) {
      this.onclickFilm = episodeId;

      const film = this.allFilms.find((el) => el.episode_id === episodeId);

      this.setFilm(film);
      this.setIsSearching(false);
    },
  },

  computed: mapGetters(["allFilms"]),
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.nav {
  padding: 20px;
  min-width: 350px;
  min-height: 100vh;
  text-align: center;
  box-shadow: $asideShadow;

  &_list_item {
    padding: 5px;
    font-size: 20px;
    color: $accentTextColor;
    cursor: pointer;
    transition: 300ms;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &:hover {
      color: $hoverAccentTextColor;
      background-color: $bgColor;
      border-radius: 10px;
      box-shadow: $boxShadow;
    }
  }
}
</style>
