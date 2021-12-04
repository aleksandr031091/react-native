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
