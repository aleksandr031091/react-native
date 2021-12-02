<template>
  <aside class="nav">
    <ul class="nav_list">
      <li
        class="nav_list_item"
        v-for="film of allFilms"
        :key="film.episode_id"
        v-on:click="getFilmId(film.episode_id)"
      >
        {{ film.title }}
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",

  data() {
    return { onclickFilm: 0 };
  },

  methods: {
    getFilmId(id) {
      console.log(id);
    },
  },

  computed: mapGetters(["allFilms"]),
};
</script>

<style scoped>
.nav {
  padding: 20px;
  min-width: 350px;
  min-height: 100vh;
  text-align: center;
  box-shadow: 8px 0px 23px -7px rgba(34, 60, 80, 0.31);
}

.nav_list {
  list-style: none;
}

.nav_list_item {
  padding: 5px;
  font-size: 20px;
  color: #0099ff;
  cursor: pointer;
  transition: 300ms;
}

.nav_list_item:not(:last-child) {
  margin-bottom: 15px;
}

.nav_list_item:hover {
  background-color: #e0ffe0;
  border-radius: 10px;
  box-shadow: 0px 8px 23px -7px rgba(175, 199, 96, 0.53);
}
</style>
