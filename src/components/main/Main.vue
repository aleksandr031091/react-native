<template>
  <main class="main">
    <NavBar />
    <MainBlock />
  </main>
</template>

<script>
import NavBar from "../nav_bar/NavBar.vue";
import MainBlock from "../main_block/MainBlock.vue";

export default {
  name: "Main",
  components: {
    NavBar,
    MainBlock,
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
</style>
