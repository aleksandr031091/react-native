<template>
  <div class="main_block">
    <Form />
    <FilmInfo />
    <FilmEntities />
  </div>
</template>

<script>
import Form from "../form/Form.vue";
import FilmInfo from "../film_info/FilmInfo.vue";
import FilmEntities from "../film_entities/FilmEntities.vue";

export default {
  name: "MainBlock",
  components: { Form, FilmInfo, FilmEntities },
};
</script>

<style scoped>
.main_block {
  padding: 30px;
}
</style>
