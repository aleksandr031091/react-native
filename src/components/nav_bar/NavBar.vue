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
.nav {
  padding: 20px;
  min-width: 350px;
  min-height: 100vh;
  text-align: center;
  box-shadow: 8px 0px 23px -7px rgba(34, 60, 80, 0.31);

  &_list_item {
    padding: 5px;
    font-size: 20px;
    color: rgb(0, 162, 255);
    cursor: pointer;
    transition: 300ms;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &:hover {
      color: #0066ff;
      background-color: #caffca9d;
      border-radius: 10px;
      box-shadow: 0px 8px 23px -7px rgba(175, 199, 96, 0.53);
    }
  }
}
</style>
