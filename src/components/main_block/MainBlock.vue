<template>
  <div class="main_block">
    <Form />
    <div v-show="!this.isSearching">
      <FilmInfo />
      <FilmEntities />
    </div>
    <SearchContent v-show="this.isSearching" />
  </div>
</template>

<script>
import Form from "../form/Form.vue";
import FilmInfo from "../film_info/FilmInfo.vue";
import FilmEntities from "../film_entities/FilmEntities.vue";
import SearchContent from "../search_content/SearchContent.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainBlock",

  components: { Form, FilmInfo, FilmEntities, SearchContent },

  computed: mapGetters(["isSearching"]),
};
</script>

<style lang="scss" scoped>
.main_block {
  padding: 30px;
}
</style>
