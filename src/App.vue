<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./components/main/Main.vue";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: { Main },

  methods: mapActions(["getAllFilmsAction"]),

  mounted() {
    this.getAllFilmsAction();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
p {
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
